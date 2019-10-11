import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
  pwdform=this.fb.group({
    currentpwd:[],
    newpwd:[],
    confirmpwd:[]
  })
  ngOnInit() {
  }

}
