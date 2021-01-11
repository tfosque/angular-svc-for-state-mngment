import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserAccount } from 'src/app/models/user-account';
import { MenuService } from 'src/app/services/menu/menu.service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  @Input() user = new BehaviorSubject<UserAccount>({})
  accountId = new BehaviorSubject<string>('');
  activeMenu = new Subject<string>();
  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.activeMenuName$.subscribe(menuName => {
      this.activeMenu.next(menuName);
    });

    // TODO add route restrictions
    this.user.subscribe(usr => {
      console.log({ usr });

      if (!isEmpty(usr)) {
        this.accountId.next(usr[0].accountId.substring(0, 6));
        console.log('id:yes:', this.accountId);
      }
    });
  }

}
