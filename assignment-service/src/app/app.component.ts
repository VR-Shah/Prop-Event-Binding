import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}
  
  title = 'assignment-service';
  // activeUser = ['vanshika','ishan'];
  // inactiveUser = ['abc','pqr'];

  ngOnInit() {
  }
  
  // settoInactive(id:number){
  //   this.inactiveUser.push(this.activeUser[id]); 
  //   this.activeUser.splice(id,1);
  // }

  // setToActive(id:number){
  //   this.activeUser.push(this.inactiveUser[id]);
  //   this.inactiveUser.splice(id,1);
  // }
  
}
