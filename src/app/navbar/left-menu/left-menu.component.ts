import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../animations/animations'
import { SidenavService } from '../../service/sidenav.service'


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Home', link: 'some-link', icon: 'home' },
    { name: 'Overview', link: 'some-link', icon: 'visibility' },
    { name: 'Messaging', link: 'some-link', icon: 'message' },
    { name: 'Templates', link: 'some-link', icon: 'border_all' },
    { name: 'Report', link: 'some-link', icon: 'report' },
    { name: 'Contact Support', link: 'some-link', icon: 'contact_support' }
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}