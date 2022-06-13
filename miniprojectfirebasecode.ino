//FirebaseESP8266.h must be included before ESP8266WiFi.h
#include "FirebaseESP8266.h"  // Install Firebase ESP8266 library
#include <ESP8266WiFi.h>
#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#define REPORTING_PERIOD_MS     1000
PulseOximeter pox;
uint32_t tsLastReport = 0;
#define FIREBASE_HOST "nodemcuchecking-default-rtdb.firebaseio.com"      
#define FIREBASE_AUTH "tw2vvsYd8KvwRtGq2wpaNBkzldbfsv0V1jz7rd6N"
#define WIFI_SSID "betterNow"
#define WIFI_PASSWORD "12332167"

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
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
Firebase.reconnectWiFi(true);
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.print(WiFi.localIP());
  Serial.println();
  Serial.print("Initializing pulse oximeter..");

    if (!pox.begin()) {
        Serial.println("FAILED");
        for(;;);
    } else {
        Serial.println("SUCCESS");
    }

pox.setIRLedCurrent(MAX30100_LED_CURR_7_6MA);
pox.setOnBeatDetectedCallback(onBeatDetected);
    


}
//
//void sensorUpdate(float hVal, float oVal) {
//  if (Firebase.setInt(firebaseData, "athul/heartrate", hVal))
//  {
//    Serial.println("PASSED heartrate");
//  }
//  else
//  {
//    Serial.println("FAILED");
//    Serial.println("REASON: " + firebaseData.errorReason());
//    Serial.println("------------------------------------");
//    Serial.println();
//  }
//  Serial.print("\n");
//  if (Firebase.setInt(firebaseData, "athul/spo2", oVal))
//  {
//    Serial.println("PASSED spo2");
//  }
//  else
//  {
//    Serial.println("FAILED");
//    Serial.println("REASON: " + firebaseData.errorReason());
//    Serial.println("------------------------------------");
//    Serial.println();
//  }
//  Serial.print("\n");
//}

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
hr_total=hr_total+hr;
i=i+1;
Serial.println(i);
Serial.println(hr_total);
        tsLastReport = millis();
    }
    if(i==10){
      Serial.println(hr_total);
    }

//    Firebase.setFloat(firebaseData, "athul/heartrate",hr);
//    Firebase.setFloat(firebaseData, "athul/spo2",o2);
//    sensorUpdate(pox.getHeartRate(),pox.getSpO2());
}
