import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Health } from './health.model';
import { HealthService } from './health.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private healthService: HealthService, private http: HttpClient, private userService:UserService) {}

  savedData(counter: number) {
    const listOfHealths: Health[] = this.healthService.getHealths();

    this.http
      .put(
        `https://nodemcuchecking-default-rtdb.firebaseio.com/userAdd/hms${
          counter + 1
        }.json`,
        listOfHealths
      )
      .subscribe((res) => {
        console.log(res);
        console.log(counter, 'again');
      });
  }
  saveData() {
    this.http
      .get<Health[]>(
        'https://nodemcuchecking-default-rtdb.firebaseio.com/userAdd.json'
      )
      .pipe(
        tap((listOfHealths: Health[]) => {
          console.log(listOfHealths);
          const n = Object.keys(listOfHealths).length;
          console.log(n);
          this.savedData(n);
        })
      )
      .subscribe();
  }

  fetchData() {
    this.http
      .get<Health[]>(
        'https://nodemcuchecking-default-rtdb.firebaseio.com/athul.json'
      )
      .pipe(
        tap((listOfHealths: Health[]) => {
          this.healthService.updateHealths(listOfHealths);
        })
      )
      .subscribe();
  }


  saveUser(d:Object){

    this.http
      .put(
        `https://nodemcuchecking-default-rtdb.firebaseio.com/userDetails.json`,
        d
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getBP(){
    this.http
    .get<string>(
      'https://nodemcuchecking-default-rtdb.firebaseio.com/bloodpressure.json'
    )
    .pipe(
      tap((bloodPressure: string) => {
        this.healthService.updateBloodPressure(bloodPressure);
      })
    )
    .subscribe();
  }
  getDisplayer(){
    this.http
      .get<Health[]>(
        'https://nodemcuchecking-default-rtdb.firebaseio.com/userAdd.json'
      )
      .pipe(
        tap((listOfHealths: Health[]) => {
          this.healthService.listOfHealths=listOfHealths;
          console.log(this.healthService.listOfHealths);
          // console.log(listOfHealths);
        })
      )
      .subscribe();
  }
  
}





// fetchSavedData(){
//   this.http
//   .get<Health[]>(
//     'https://nodemcuchecking-default-rtdb.firebaseio.com/userAdd.json'
//   )
//   .pipe(
//     tap((listOfHealths: Health[]) => {
//       console.log(listOfHealths);
//       const n = Object.keys(listOfHealths).length;
//       console.log(n);
//       this.savedData(n);
//     })
//   )
//   .subscribe();
// }
