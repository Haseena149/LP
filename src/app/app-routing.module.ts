import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path:'',
  loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
 } ,
 { path:'userlogin',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
 },
 {
   path:'userboard',
   loadChildren: () => import('./userdashboard/userdashboard.module').then(m => m.UserdashboardModule)
 }
 
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
