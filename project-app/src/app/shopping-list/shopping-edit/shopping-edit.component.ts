import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') public nameInputRef: ElementRef;
    @ViewChild('amountInput') public amountInputRef: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {}

    /**
     * onAdd
     */
    public onAdd() {
        const name = this.nameInputRef.nativeElement.value;
        const amount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(name, amount);
        this.shoppingListService.addIngredient(newIngredient);
    }
}
