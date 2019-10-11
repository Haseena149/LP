import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  carwashform;
  constructor(public fb:FormBuilder,public http:HttpClient,public router:Router) { 
  this.carwashform=this.fb.group({
    username:[],
    password:[]
  })
}

baseUrl="https://api.mlab.com/api/1/databases/phaseena/collections/usersignup?"
apiKey="&apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz"

 userlogin(x){
  
   this.http.get(`${this.baseUrl}q=${JSON.stringify(this.carwashform.value)}${this.apiKey}`).subscribe((res:any[])=>
    {
      
      if(res.length!=0){
        this.router.navigate(["/userboard"])
         }
         else{
           console.log("Try again");
         }
    })
  console.log(this.carwashform.value);
 }
  ngOnInit() {
  }

}
