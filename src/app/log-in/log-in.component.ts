import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  userLogIn = new FormGroup({
    userN: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }

  onSubmit(): void {
    localStorage.setItem('userLog', this.userLogIn.get('userN').value);
  }
}
