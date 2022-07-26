//FirebaseESP8266.h must be included before ESP8266WiFi.h
#include "FirebaseESP8266.h"  // Install Firebase ESP8266 library
#include <ESP8266WiFi.h>
#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#include <LiquidCrystal_I2C.h>

// Set the LCD address to 0x27 for a 16 chars and 2 line display
LiquidCrystal_I2C lcd(0x27, 16, 2);
#define REPORTING_PERIOD_MS     1000
PulseOximeter pox;
uint32_t tsLastReport = 0;
#define FIREBASE_HOST "nodemcuchecking-default-rtdb.firebaseio.com"      
#define FIREBASE_AUTH "tw2vvsYd8KvwRtGq2wpaNBkzldbfsv0V1jz7rd6N"
#define WIFI_SSID "betterNow"
#define WIFI_PASSWORD "12345678"

//Define FirebaseESP8266 data object
FirebaseData firebaseData;
FirebaseData CutData;
FirebaseJson json;
float hr=0;
float o2=0;
int i=0;
float hr_total=0;

void onBeatDetected() {
    Serial.println("♥ Beat!");
}

void setup()
{

  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
   lcd.begin(); // Init with pin default ESP8266 or ARDUINO
  // lcd.begin(0, 2); //ESP8266-01 I2C with pin 0-SDA 2-SCL
  // Turn on the blacklight and print a message.
  lcd.backlight();
  lcd.setCursor(0, 0);

#if defined(ESP8266)
  lcd.print("ESP8266");
#else
  lcd.print("ARDUINO");
#endif

  lcd.setCursor(0, 0);
  Serial.print("Connecting to Wi-Fi");
  lcd.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    lcd.print(".");
    delay(300);
  }
  lcd.clear();
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
Firebase.reconnectWiFi(true);
  Serial.println();
  lcd.setCursor(0, 0);
  Serial.print("Connected with IP: ");
  lcd.print("Connected");
  Serial.print(WiFi.localIP());
  Serial.println();
  lcd.setCursor(0,1);
  Serial.print("Initializing pulse oximeter..");
lcd.print("initializing.. ");
    if (!pox.begin()) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("FAILED");
        Serial.println("FAILED");
        for(;;);
    } else {
       lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("SUCCESS");
        Serial.println("SUCCESS");
    }

pox.setIRLedCurrent(MAX30100_LED_CURR_7_6MA);
pox.setOnBeatDetectedCallback(onBeatDetected);
    

lcd.clear();

}

void loop() {

     pox.update();

     hr=pox.getHeartRate();
     o2=pox.getSpO2();
    if (millis() - tsLastReport > REPORTING_PERIOD_MS) {
        Serial.print("Heart rate:");
        Serial.print(hr);
        Serial.print("bpm / SpO2:");
        Serial.print(o2);
        Serial.println("%");

i=i+1;
Serial.println(i);

        tsLastReport = millis();
    }
    if(i==15){
        delay(2000);
        lcd.setCursor(0, 0);
        lcd.print("hr: ");
      lcd.print(hr);
      lcd.print("bpm");
      lcd.setCursor(0,1);
      lcd.print("spO2: ");
      lcd.print(o2);
      lcd.print("%");
       Firebase.setFloat(firebaseData, "athul/heartrate",hr);
    Firebase.setFloat(firebaseData, "athul/spo2",o2);
    pox.resume();
      
    }
}
