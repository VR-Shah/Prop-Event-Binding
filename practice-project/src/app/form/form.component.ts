import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // email ='';
  // password ='';
  @Output() emailSubmit = new EventEmitter<{email:string,password:string}>();

  @ViewChild('password') password: ElementRef |any;
  constructor() { }

  ngOnInit(): void {
  }

  // clickOnSubmit(){
  //   this.emailSubmit.emit({
  //     email:this.email ,
  //     password:this.password
  //   });
  // }
  clickOnSubmit(email:HTMLInputElement){
    this.emailSubmit.emit({
      email:email.value ,
      password:this.password.nativeElement.value
    });
  }
}
