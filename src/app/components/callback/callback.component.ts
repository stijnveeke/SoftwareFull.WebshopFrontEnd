import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.auth.handleAuthentication();
    this.router.navigate(['/']);
  }

}
