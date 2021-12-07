import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PetWalkerService, PetWalker } from '../pet-walker.service';

@Component({
  selector: 'app-pet-walkers',
  templateUrl: './pet-walkers.page.html',
  styleUrls: ['./pet-walkers.page.scss'],
})
export class PetWalkersPage implements OnInit {
  walkers: PetWalker[];
  constructor(private router: Router, private service: PetWalkerService) { }

  ngOnInit() {
    this.service.getAllDogWalkers().subscribe(response =>{
      this.walkers = response;
      console.log(this.walkers);
    });

  }

  onClick(id: string){
    this.service.getDetails(id).subscribe(response => {
      this.walkers = response;
      this.send(this.walkers);
      console.log(response);
    });
  }

  send(walkers: PetWalker[]){
    const navigationExtras: NavigationExtras = {
      state: {
      walkers,
      }
    };
    this.router.navigate(['/profile'], navigationExtras);
  }

}
