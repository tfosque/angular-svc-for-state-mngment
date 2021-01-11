import { LoginService } from './../../../services/login/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { UserAccount } from 'src/app/models/user-account';
import { MenuService } from 'src/app/services/menu/menu.service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  @Input() user = new BehaviorSubject<UserAccount>({});
  accountId = new BehaviorSubject<string>('');
  activeMenu = new Subject<string>();

  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private readonly menuService: MenuService,
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.menuService.activeMenuName$.subscribe(menuName => {
      this.activeMenu.next(menuName);
    });

    this.loginService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn.next(loggedIn);
      console.log('is logging in:.....', this.isLoggedIn.getValue());
    })
    // TODO add route restrictions
    this.user.subscribe(usr => {
      // console.log({ usr });

      if (!isEmpty(usr)) {
        this.accountId.next(usr[0].accountId.substring(0, 6));
        // console.log('id:yes:', this.accountId);
      }
    });
  }

}
