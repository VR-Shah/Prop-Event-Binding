import { Component, ElementRef, OnChanges, OnInit,SimpleChanges,ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-referance',
  templateUrl: './template-referance.component.html',
  styleUrls: ['./template-referance.component.css']
})
export class TemplateReferanceComponent implements OnInit,OnChanges {

  // firstName = '';
  @ViewChild('firstName',{static:false}) firstName :ElementRef | any;
  constructor() { 
    console.log("on constructor called");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes called"+changes);
  }

  ngOnInit(): void {
    console.log("on init method");
  }

  
  clickHere(firstName:HTMLInputElement){
    console.log(firstName.value);

    console.log(this.firstName.nativeElement.value);
  }
}
