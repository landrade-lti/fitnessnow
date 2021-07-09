import {Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pm-meals',
    templateUrl: './meal-details.component.html'
})
export class MealDetailComponent implements OnInit{
    pageTitle: string = 'Meal Details';
    constructor() { }
    ngOnInit(): void{
    }
}