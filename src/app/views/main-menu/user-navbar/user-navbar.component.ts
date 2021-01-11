import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  activeMenu = new Subject<string>();
  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.activeMenuName$.subscribe(menuName => {
      this.activeMenu.next(menuName);
    })
  }

}
