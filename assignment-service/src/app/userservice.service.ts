import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  activeUser = ['vanshika','ishan'];
  inactiveUser = ['abc','pqr'];

  settoInactive(id:number){
    this.inactiveUser.push(this.activeUser[id]); 
    this.activeUser.splice(id,1);
  }

  setToActive(id:number){
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id,1);
  }

}
