import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  buttonDisabled=true;
  username='';

  onNameChange(){
    this.buttonDisabled = (this.username.length==0);
  }

  onSubmit() {
    this.username='';
    this.buttonDisabled=true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
