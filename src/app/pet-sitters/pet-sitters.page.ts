// import { Component, OnInit } from '@angular/core';
// import { NavigationExtras, Router } from '@angular/router';
// import { PetSitterService, PetSitter } from '../pet-sitter.service';

// @Component({
//   selector: 'app-pet-sitters',
//   templateUrl: './pet-sitters.page.html',
//   styleUrls: ['./pet-sitters.page.scss'],
// })
// export class PetSittersPage implements OnInit {
//   sitters: PetSitter[];
//   constructor(private router: Router, private service: PetSitterService) { }

//   ngOnInit() {
//     this.service.getAllPetSitters().subscribe(response =>{
//       this.sitters = response;
//       console.log(this.sitters);
//     });

//   }

//   onClick2(id: string){
//     this.service.getDetails2(id).subscribe(response => {
//       this.sitters = response;
//       this.send2(this.sitters);
//       console.log(response);
//     });
//   }

//   send2(sitters: PetSitter[]){
//     const navigationExtras: NavigationExtras = {
//       state: {
//       sitters,
//       }
//     };
//     this.router.navigate(['/sitter-profile'], navigationExtras);
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  onClick2(id: string){
    this.service.getDetails2(id).subscribe(response => {
      this.sitters = response;
      this.send2(this.sitters);
      console.log(response);
    });
  }

  send2(sitters: PetSitter[]){
    const navigationExtras: NavigationExtras = {
      state: {
      sitters,
      }
    };
    this.router.navigate(['/sitter-profile'], navigationExtras);
  }

}

