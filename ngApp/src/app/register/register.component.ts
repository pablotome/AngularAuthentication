import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor() { }

  ngOnInit() {
  }

  RegisterUser(){
    console.log(this.registerUserData)
  }

}
