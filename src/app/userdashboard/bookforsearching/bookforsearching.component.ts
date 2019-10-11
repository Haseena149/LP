import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-bookforsearching',
  templateUrl: './bookforsearching.component.html',
  styleUrls: ['./bookforsearching.component.css']
})
export class BookforsearchingComponent implements OnInit {

  constructor( public fb:FormBuilder) { }
  bookingform=this.fb.group({
    vehicalname:[],
    vehicaltype:[],
    personname:[],
    personmobile:[],
    servicetype:[],
    requirements:[],
    yes:[],
    no:[],
    arealocation:[],
    pickupdate:[],
    picklocation:[],
    budgetprice:[]
  })
  ngOnInit() {
  }

}
