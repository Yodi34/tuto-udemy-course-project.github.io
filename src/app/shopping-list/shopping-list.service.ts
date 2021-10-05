import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoopingListService {
    IngredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientsChanged.emit(this.ingredients.slice());
    }

    //Solution tamporraire car on emet un évènement pour chaque ingredient que l'on ajoute
    // addIngredients(ingredients: Ingredient[]) {
    //     ingredients.forEach(ingredient => {
    //         this.addIngredient(ingredient);
    //     });
    // }

    //Une meilleur solution consiste à encoyer tous les ingrédients d'un coup, dans un seul événement.
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.IngredientsChanged.emit(this.ingredients.slice());
    }

}