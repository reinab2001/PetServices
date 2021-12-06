import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  details: any;
  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(params => {
    if(this.router.getCurrentNavigation().extras.state){
      this.details= this.router.getCurrentNavigation().extras.state;
    }
  });
  }

  ngOnInit() {
    console.log(this.details);
  }

}
