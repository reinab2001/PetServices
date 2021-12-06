import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PetWalker{
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
export class PetWalkerService {
    private baseUrl='http://localhost/petServices/';
    constructor( private http: HttpClient) { }
    getAllDogWalkers(){
      return this.http.get<[PetWalker]>(this.baseUrl+ 'getAllDogWalkers.php');
    }
    getDetails(id: string){
      return this.http.get<[PetWalker]>(this.baseUrl+ 'profileWalker.php?id='+id);
    }
    getDetails2(id: string){
      return this.http.get<[PetSitter]>(this.baseUrl+ 'profileSitter.php?id='+id);
    }
}


