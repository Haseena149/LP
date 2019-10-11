import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookforsearchingComponent } from './bookforsearching/bookforsearching.component';
import { UserboardComponent } from './userboard/userboard.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [
  {
  path:'',
  component:UserboardComponent
  },
  {
    path:'bookingwash',
    component:BookforsearchingComponent
  },
  {
    path:'viewhistory',
    component:ViewhistoryComponent
  },
  {
    path:'editprofile',
    component:EditprofileComponent
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashboardRoutingModule { }
