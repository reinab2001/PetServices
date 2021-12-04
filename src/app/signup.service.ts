import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  id?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  phone_num: string;
  username: string;
  password: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl='http://localhost/petServices/';
  constructor( private http: HttpClient) { }
  insertUser(user: User){
    return this.http.post<[User]>(this.baseUrl+ 'signup.php', user);
  }
}
