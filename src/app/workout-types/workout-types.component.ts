import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-workout-types',
  templateUrl: './workout-types.component.html',
  styleUrls: ['./workout-types.component.css']
})
export class WorkoutTypesComponent implements OnInit {
  pageTitle: string= 'Workout Types';
  constructor() { }

  ngOnInit(): void {
  }

}
