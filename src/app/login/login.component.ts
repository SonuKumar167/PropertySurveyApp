import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  mobile:string = "";
  spinnerCheck:boolean = false;
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router, private spinner: NgxSpinnerService) { 
    this.signinForm = this.frmbuilder.group({
      mobile: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  signData(signinForm: any){ 
    this.mobile = signinForm.controls.mobile.value;
    const data = {mobile:this.mobile};
    this.spinnerCheck=true;
    this.spinner.show();
    console.log(data);
  }

}
