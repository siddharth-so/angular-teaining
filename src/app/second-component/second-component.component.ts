import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  @Output() nameEvent = new EventEmitter<string>();
  username: string = '';
  userAdded: boolean = false;
  usersArr = [];

  constructor() { }

  ngOnInit() {

  }

  onNameChange () {
    this.nameEvent.emit(this.username);
  }

  reset() {
    this.username = '';
    this.usersArr = [];
    this.onNameChange ();
    this.userAdded = false;
  }

  submit() {
    let date = new Date()
    let getdate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes();
    this.userAdded = true;
    this.usersArr.push(
      {
        'userName': this.username,
        'addedTime': getdate
      }
    );
    this.username = '';
  }

  successBg(user) {
    return (this.userAdded === true && user !== '') ? 'green' : 'red';  
  }

  successColor() {
    return this.userAdded === true ? '#fff' : 'red';  
  }

}
