import { Component,OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-active-component',
  templateUrl: './active-component.component.html',
  styleUrls: ['./active-component.component.css']
})
export class ActiveComponentComponent implements OnInit {
  // @Output() settoInactive = new EventEmitter<number>();

  activeUser :string[] |any;

  constructor(private userService:UserserviceService) { }

  ngOnInit() {
    this.activeUser = this.userService.activeUser;
  }

  setToInactive(id:number){
    // this.settoInactive.emit(id);
    this.userService.settoInactive(id);
  }
}
