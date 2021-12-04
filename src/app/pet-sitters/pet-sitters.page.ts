import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetSitterService, PetSitter } from '../pet-sitter.service';

@Component({
  selector: 'app-pet-sitters',
  templateUrl: './pet-sitters.page.html',
  styleUrls: ['./pet-sitters.page.scss'],
})
export class PetSittersPage implements OnInit {

  sitters: PetSitter[];
  constructor(private router: Router, private service: PetSitterService) { }

  ngOnInit() {
    this.service.getAllPetSitters().subscribe(response =>{
      this.sitters = response;
      console.log(this.sitters);
    });

  }
}
