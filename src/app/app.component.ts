import { Component } from '@angular/core';
/**import { defaultMaxListeners } from 'events';**/

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'> {{title}} </a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/plan-types'>Workout Plans</a></li>
      <li><a class='nav-link' routerLink='/workout-types'>Workout Types</a></li>
      <li><a class='nav-link' routerLink='/meals'>Meals</a></li>
      <li><a class='nav-link' routerLink='/user-profile'>User Profile</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Fitness Now';
}
