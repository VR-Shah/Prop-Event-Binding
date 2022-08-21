import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  @ViewChild('nameInput', { static: false })
  nameInput!: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInput!: ElementRef;
  @Output() ingrediendAdded = new EventEmitter<Ingredient>();
  
  ngOnInit(): void {
  }

  addItem(){

    const ingName = this.nameInput?.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingrediendAdded.emit(newIngredient);
  }
}
