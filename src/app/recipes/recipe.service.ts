import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoopingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 'this is a simpy test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 22)
            ]
        ),
        new Recipe(
            'Another Test Recipe', 'this is a simpy SECOND test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private shoppinListService: ShoopingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addingredientToShoppingList(ingredient: Ingredient[]) {
        this.shoppinListService.addIngredients(ingredient);
    }

}