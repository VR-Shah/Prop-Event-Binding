import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  constructor(private route:Router){}

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  // redirectToServer(id:number){
  //   //this is the way to pass the queryparmas to the parameters
  //   this.route.navigate(['servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  // }
}
