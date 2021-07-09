import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  pageTitle: string= 'User Profile';
  constructor() { }

  ngOnInit(): void {
  }

}
