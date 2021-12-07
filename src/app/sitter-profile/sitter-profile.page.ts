import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sitter-profile',
  templateUrl: './sitter-profile.page.html',
  styleUrls: ['./sitter-profile.page.scss'],
})
export class SitterProfilePage implements OnInit {
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
