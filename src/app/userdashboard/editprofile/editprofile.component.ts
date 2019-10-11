import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
  profileform=this.fb.group(
    {
      name:[],
      contact:[],
      email:[],
      pincode:[],
      address:[]
    }
  )
  ngOnInit() {
  }

}
