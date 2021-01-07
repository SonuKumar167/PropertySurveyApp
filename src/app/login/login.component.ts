import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  mobile:string = "";
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) { 
    this.signinForm = this.frmbuilder.group({
      mobile: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  signData(signinForm: any){ 
    this.mobile = signinForm.controls.mobile.value;
    const data = {mobile:this.mobile};
    console.log(data);
  }

}
