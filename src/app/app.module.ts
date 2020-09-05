import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessUserComponent } from './business-user/business-user.component';
import { CustomerFeedComponent } from './customer-feed/customer-feed.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './navbar/header/header.component';
import { LeftMenuComponent } from './navbar/left-menu/left-menu.component';
import { SidenavService } from './service/sidenav.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendsComponent } from './trends/trends.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlightcardComponent } from './flightcard/flightcard.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { SearchComponent } from './search/search.component';
import { ManagerChartsComponent } from './manager/manager-charts/manager-charts.component';
import { SidenavComponent } from './manager/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    BusinessUserComponent,
    CustomerFeedComponent,
    HeaderComponent,
    LeftMenuComponent,
    TrendsComponent,
    FlightcardComponent,
    ActivityFeedComponent,
    SearchComponent,
    ManagerChartsComponent,
    SidenavComponent
    // CustomerFeedComponent
  ],
  entryComponents: [CustomerFeedComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ChartsModule
    // FlexLayoutModule
  ],
  providers: [ SidenavService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
