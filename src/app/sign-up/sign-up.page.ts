import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { SignupService, User } from '../signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private service: SignupService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const user= form.value;
    this.service.insertUser(user).subscribe(response => {
      console.log(response);
    });
  }
}
