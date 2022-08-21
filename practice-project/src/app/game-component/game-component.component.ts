import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  @Output() gameStart = new EventEmitter<number>();
  
  letIntravl:any;
  number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incNumber(){
    this.number = this.number+ 1;
  }
  startGame(){
    this.letIntravl = setInterval(() => {
      this.gameStart.emit(this.number+1);
      this.number++;
    },1000);
  }

  stopGame(){
    clearInterval(this.letIntravl);
  }
}
