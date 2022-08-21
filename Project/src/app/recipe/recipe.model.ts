import { Ingredient } from "../shopping-list/ingredient.model";

export class Recipe{
    public recipename?:string;
    public imagePath?:string;
    public discription?:string;
    public ingredients?:Ingredient[];
    constructor(recipename?:string,imagepath?:string,discription?:string,ingredient?:Ingredient[]){
        this.recipename =recipename;
        this.imagePath = imagepath;
        this.discription = discription;
        this.ingredients = ingredient;
    }
}