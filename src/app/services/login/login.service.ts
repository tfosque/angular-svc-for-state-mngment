import { BehaviorSubject } from 'rxjs';
import { UserAccount } from './../../models/user-account';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isEmpty } from 'lodash';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  public loginUser(user: UserAccount): void {
    console.log({ user })
    this.http.get<UserAccount[]>(`http://localhost:3000/user-accounts?filter[where][email]=${user.email}`)
      .subscribe(usr => {
        /* Check conditions */
        const emailPassed = !isEmpty(usr) && usr.length === 1 && (usr[0].email !== '');
        const passwordPassed = !isEmpty(usr) && usr[0].password !== '';

        if (emailPassed && passwordPassed) {
          this.isLoggedIn.next(true);
          // TODO Set User Account
          this.router.navigate(['proplus']);
          console.log({ usr });
        }
      });
  }
}
