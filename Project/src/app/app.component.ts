import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  selectedItem?:string ='recipe';

  onSelectSelectedItem(selectedItem:string){
    this.selectedItem = selectedItem;
  }
}
