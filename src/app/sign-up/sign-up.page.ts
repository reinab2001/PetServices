import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { SignupService, User } from '../signup.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private myToast: any;
  constructor(private service: SignupService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const user= form.value;
    if(user.username==='' || user.password==='' || user.phone_num==='' || user.address===''){
      this.showToast('Please fill');
    }
    else{
    this.service.insertUser(user).subscribe(response => {
      console.log(response);
    });
    this.showToast('Now you have an account!');
    this.router.navigate(['/pet-services']);
    }
  }
  showToast(msg: string) {
    this.myToast = this.toast.create({
      message: msg,
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
