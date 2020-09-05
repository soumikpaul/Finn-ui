import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessUserComponent} from './business-user/business-user.component';
import {ManagerChartsComponent} from './manager/manager-charts/manager-charts.component';

const routes: Routes = [
  {path: 'businessUser', component: BusinessUserComponent},
  {path: 'managerView', component: ManagerChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
