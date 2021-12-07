import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PetSitter{
  id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  full_name: string;
  age: string;
  served: string;
  rate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  phone_num: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetSitterService {
    private baseUrl='http://localhost/petServices/';
    constructor( private http: HttpClient) { }
    getAllPetSitters(){
      return this.http.get<[PetSitter]>(this.baseUrl+ 'getAllPetSitters.php');
    }
    getDetails2(id: string){
      return this.http.get<[PetSitter]>(this.baseUrl+ 'profileSitter.php?id='+id);
    }
}


