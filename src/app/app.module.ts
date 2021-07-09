import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MealDetailComponent } from './meals/meal-details.component';
import { PlanTypesComponent } from './workout-plans/plan-types.component';
import { RouterModule } from '@angular/router';
import { WorkoutTypesComponent } from './workout-types/workout-types.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MealDetailComponent,
    PlanTypesComponent,
    WorkoutTypesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'plan-types', component: PlanTypesComponent},
      {path: 'workout-types', component: WorkoutTypesComponent},
      {path: 'meals', component: MealDetailComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
