import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  constructor(public fb:FormBuilder,public http:HttpClient) { }
  url="https://api.mlab.com/api/1/databases/phaseena/collections/setpasword?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  carwashform=this.fb.group({
    enterpassword:[],
    confirmpassword:[]
  })
  setpasword(){
    this.http.post(this.url,this.carwashform.value).subscribe((res)=>{console.log(res)})
 
  }
  ngOnInit() {
  }

}
