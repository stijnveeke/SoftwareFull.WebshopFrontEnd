import { Component, Inject, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  profile: any;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  loginWithRedirect() {
    this.auth.login();
  }

  loginWithPopup() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
