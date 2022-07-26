import { EventEmitter, Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Health } from './health.model';

@Injectable({ providedIn: 'root' })
export class HealthService {
    listChangedEvent:EventEmitter<Health[]>=new EventEmitter();
    changedBP:EventEmitter<string>=new EventEmitter();
  listOfHealths: Health[] = [];
  bp:string='';
  getHealths() {
    return this.listOfHealths;
  }
  getBP(){
    return this.bp;
  }
  updateHealths(health:Health[]){
this.listOfHealths=health;
this.listChangedEvent.emit(this.listOfHealths);
console.log(this.listChangedEvent);

  }
  updateBloodPressure(obtainedBP:string){
    this.bp=obtainedBP;
    this.changedBP.emit(this.bp);

  }
  getDisplayHealth(){
    
    return this.listOfHealths;
  }


//   deletePost(index: number) {
//     this.listOfPost.splice(index, 1);
//   }

//   addPost(post: Post) {
//     this.listOfPost.push(post);
//   }
//   updatePost(index: number, post: Post) {
//     this.listOfPost[index] = post;
//   }
//   getPost(index:number){
//     return this.listOfPost[index];
//   }
  constructor() {}
}
