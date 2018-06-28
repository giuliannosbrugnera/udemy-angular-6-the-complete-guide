import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') public nameInputRef: ElementRef;
    @ViewChild('amountInput') public amountInputRef: ElementRef;

    @Output()
    private ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {}

    ngOnInit() {}

    /**
     * onAdd
     */
    public onAdd() {
        const name = this.nameInputRef.nativeElement.value;
        const amount = this.amountInputRef.nativeElement.value;

        this.ingredientAdded.emit(new Ingredient(name, amount));
    }
}
