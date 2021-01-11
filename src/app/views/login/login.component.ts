import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = { email: '', password: '' };
  constructor(
    private readonly loginServie: LoginService
  ) { }

  ngOnInit(): void {
    this.loginServie.isLoggedIn$.subscribe(isLogged => {
      console.log({ isLogged })
    });
  }

  login(form: NgForm) {
    // console.log({ form });

    const loginPerson = { email: this.model.email, password: this.model.password };
    this.loginServie.loginUser(loginPerson);
  }

}
