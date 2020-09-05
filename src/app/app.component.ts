import { Component } from '@angular/core';
import { SidenavService } from './service/sidenav.service'
import { onMainContentChange } from './animations/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange]

})
export class AppComponent {
  title = 'FinnAirProject';
  public onSideNavChange: boolean;
  

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
    
  }
}
