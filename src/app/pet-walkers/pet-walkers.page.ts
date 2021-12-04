import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
