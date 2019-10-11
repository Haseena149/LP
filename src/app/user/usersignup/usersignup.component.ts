import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(public fb:FormBuilder,public http:HttpClient,private router:Router) { }
  url="https://api.mlab.com/api/1/databases/phaseena/collections/usersignup?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  carwashform=this.fb.group({
    username:[],
    password:[],
    otp:[]
  })
  
  ngOnInit() {
  }
  gotosetpasswordpage(){
    this.router.navigate(['userlogin/setpas'])
    this.http.post(this.url,this.carwashform.value).subscribe((res)=>{console.log(res)})
  }

}
