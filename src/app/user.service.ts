import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
 
    userDetails:User[]=[];

getUserDetails(){
    return this.userDetails;
}
clearUserDetails(){
    this.userDetails=[];
    return this.userDetails;
}
  constructor() {}
}
