import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  constructor(){
    // console.log("when a constructor called")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ng on changes"+changes);
  }

  ngOnInit(): void {
    
    // console.log("ngOnInit called")
  }
  number:any;
  evenNumber :number[] = [];
  oddNumber :number[]=[];
  numbers =[1,2,3,4,5];
  evenNumbers =[2,4];
  oddNumbers = [1,3,5];
  onlyOdd=false;
  // title = 'practice-project';
  // email:any;
  // password:any;
  // emailElement:any=[{email:'vanshikashah@gmail.com',password:'1234'}];
  // serverElement :any= [{type:"server",name:"vanshikashah780@gmail.com",password:"1233"}];
  // serverName ='';
  // serverContent ='';
  // serverElement :any = [];

  // addsServer(){
  //   this.serverElement.push({
  //     type:"email",
  //     name:this.serverName,
  //     content:this.serverContent
  //   })
  // }

  // addServerBluePrint(){
  //   this.serverElement.push({
  //     type:"blueprint",
  //     name:this.serverName,
  //     conent:this.serverContent
  //   })
  // }
  // emailCreated(serverData : {name:string,password:string}){
  //   this.serverElement.push({
  //     type:'email',
  //     name:serverData.name,
  //     password:serverData.password
  //   });
  // }

  // EmailBluePrintCreated(serverData:{name:string,password:string}){
  //   this.serverElement.push({
  //     type:'blueprint',
  //     name:serverData.name,
  //     password:serverData.password
  //   });
  // }
  // clickOnSubmit(){
  //   this.emailElement.push({
  //     email:this.
  //     password:this.password
  //   })
  // }
  // emailSubmitted(emailSubmit:{email:string,password:string}){
  //   this.emailElement.push({
  //     email:emailSubmit.email,
  //     password:emailSubmit.password
  //   })
  // }

  startGameEvent(gameStart:number){
    // this.abc = gameStart;
    console.log(gameStart);
    if(gameStart % 2 == 0){
      this.evenNumber.push(gameStart);
    } else{
      this.oddNumber.push(gameStart);
    }
  }

}
