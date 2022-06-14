import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Health } from './health.model';
import { HealthService } from './health.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private healthService: HealthService, private http: HttpClient) {}

  saveData() {
    const listOfHealths: Health[] = this.healthService.getHealths();
    this.http
      .put(
        'https://nodemcuchecking-default-rtdb.firebaseio.com/athulAdd.json',
        listOfHealths
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchData() {
    this.http
      .get<Health[]>(
        'https://nodemcuchecking-default-rtdb.firebaseio.com/athul.json'
      )
      .pipe(
        tap((listOfHealths: Health[]) => {

          this.healthService.updateHealths(listOfHealths)
        })
      )
      .subscribe();
  }
}
