import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SigninService, User } from '../signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  private myToast: any;
  constructor(private service: SigninService, private router: Router,private toast: ToastController) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const user= form.value;
    if(user.username==='' || user.password===''){
      this.showToast('Please fill');
    }else{
      this.service.findUser(user.username,user.password).subscribe(response =>{
        if(response[0]){
          this.showToast('Signed in successfully');
          this.router.navigate(['pet-services']);
        }else{
          this.showToast('You do not have an account. Please sign up');
        }
      });
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


