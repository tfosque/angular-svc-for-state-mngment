import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/user/user-account.service';
import { UserAccount } from 'src/app/models/user-account';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  user = new BehaviorSubject<UserAccount[]>([]);
  constructor(
    private readonly userAccountService: UserAccountService,
  ) { }

  ngOnInit(): void {
    this.userAccountService.
      /* TODO Should the Menu detect initial credentials */
      getUserAccount();
    this.userAccountService.userAccount$.subscribe(user => {
      this.user.next(user.slice(0, 1));
    });
  }

}
