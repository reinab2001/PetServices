import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private baseUrl='http://localhost/petServices/';
  constructor( private http: HttpClient) { }
  findUser(username: string, password: string){
    return this.http.get<[User]>(this.baseUrl+ 'signin.php?username='+username+'&password='+password);
  }
}
