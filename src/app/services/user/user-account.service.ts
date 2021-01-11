import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccount } from 'src/app/models/user-account';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  userAccount = new BehaviorSubject<UserAccount[]>([]);
  userAccount$ = this.userAccount.asObservable();
  constructor(
    private readonly http: HttpClient
  ) { }

  getUserAccount(user = 'tim.fosque@gmail.com'): Observable<any> {
    const obj = `?filter[where][email]=${user}`;
    this.http.get<UserAccount[]>(`http://localhost:3000/user-accounts${obj}`)
      .subscribe(acct => {
        this.userAccount.next(acct.slice(0, 6));
        // console.log({ acct });
      });
    return this.userAccount$;
  }

  /* Update UserAccount
  { "templates": [{
    "templateName": "MyFirstTempate",      
    "templateId": "123abc", 
    "templateItems": [], 
    "createDate": "1/2/2021", 
    "owner": "Tim Fosque"
    }]
    } */
}
