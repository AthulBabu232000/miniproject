import { EventEmitter, Injectable } from '@angular/core';
import { Health } from './health.model';

@Injectable({ providedIn: 'root' })
export class HealthService {
    listChangedEvent:EventEmitter<Health[]>=new EventEmitter();
  listOfHealths: Health[] = [
    // new Health(
    // //  'username',
    // //   20,
    // //  '60',
    // //  '97',
    // //  'unknown',
    // //   new Date()
    // ),
   
 
  ];
 
  getHealths() {
    return this.listOfHealths;
  }
  updateHealths(health:Health[]){
this.listOfHealths=health;
this.listChangedEvent.emit(this.listOfHealths);
// console.log(this.listOfHealths);

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
