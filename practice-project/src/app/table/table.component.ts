import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit ,OnChanges{

  @Input() ele: {email:string,password:string} |any ;
  @Input() name?:string;
  constructor() {
    console.log("on constructor called");
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng change called"+changes)
  }

  ngOnInit(): void {
    console.log("on init method called")
  }

}
