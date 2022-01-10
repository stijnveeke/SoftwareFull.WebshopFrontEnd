import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
