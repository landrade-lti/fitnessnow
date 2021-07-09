import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-plan-types',
  templateUrl: './plan-types.component.html',
  styleUrls: ['./plan-types.component.css']
})
export class PlanTypesComponent implements OnInit {
  pageTitle: string = 'Workout Plan Types';
  constructor() { }

  ngOnInit(): void {
  }

}
