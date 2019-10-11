import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { BookforsearchingComponent } from '../userdashboard/bookforsearching/bookforsearching.component';


const routes: Routes = [
  {
      path:'',
      component:UserloginComponent
 
  },
  {
    path:'usersignup',
    component:UsersignupComponent
  },
  {
    path:'setpas',
    component:SetpasswordComponent
  },
  {
    path:'forgotpasword',
    component:SetpasswordComponent
  },
  {
    path:'userLogin',
    component:UserloginComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
