import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '../user-interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

// add user 
  AddUser(data:User):Observable<any>{
    // debugger;
    return this.http.post<User[]>('http://localhost:3000/users',data);
     }

     // get user record
  GetUSersData():Observable<any>{
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getUser(Id:any):Observable<any>{
    // debugger
    return this.http.get<User[]>(`http://localhost:3000/users/${Id}`)
  }
// update user record
  updateUserData(user:User):Observable<any>{
    // debugger;
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`,user)
      }

  // delete user record
  DeleteUserData(Id:any):Observable<any>{
    return this.http.delete<User>(`http://localhost:3000/users/${Id}`)
  }
}
