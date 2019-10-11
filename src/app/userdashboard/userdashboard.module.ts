import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { BookforsearchingComponent } from './bookforsearching/bookforsearching.component';
import { UserboardComponent } from './userboard/userboard.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BookforsearchingComponent, UserboardComponent, ViewhistoryComponent, EditprofileComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    UserdashboardRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserdashboardModule { }
