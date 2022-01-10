import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // profileJson: string = null;
  // tokenClaimsJson: string = null;

  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}
