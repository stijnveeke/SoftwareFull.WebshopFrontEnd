import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
