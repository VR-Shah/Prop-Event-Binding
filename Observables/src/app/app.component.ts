import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Observables';
  subscription!: Subscription;
  data!:Subscription;

  ngOnInit(){
    this.subscription = interval(1000).subscribe(count=>{
      console.log(count);
    });

    // const customObservable = Observable.
    //Create method is deprecated in 
    const abc = new Observable((observer: Observer<void>) => {
      let count =0;
      setInterval(()=>{
        observer.next();
        if(count==2){
          observer.complete();
        }
        if(count>3){
          observer.error(new Error("count is not proper"));
        }
        count++;
      },1000);
      
      observer.complete();
    });
    
    this.data = abc.subscribe( data =>{
      console.log("<<>>"+data);
    },error=>{
      console.log(error);
      alert(error.message);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
