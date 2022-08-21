import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-inactive-component',
  templateUrl: './inactive-component.component.html',
  styleUrls: ['./inactive-component.component.css']
})
export class InactiveComponentComponent implements OnInit {
  inactiveUser :string[] |any;

  // @Output() settoActive = new EventEmitter<number>();

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.inactiveUser = this.userService.inactiveUser;
  }

  setToActive(id:number){
    // this.settoActive.emit(id);
    this.userService.setToActive(id);
  }
}
