import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user-interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserList!: User[];
  constructor( private userdata: UsersService){

  }

  ngOnInit(){
    this.getUserData()
    
  }

 // get user record code
  getUserData(){
    this.userdata.GetUSersData().subscribe((res: User[])=>{
      this.UserList = res
         })
  }

// delete user  api code
  deleteUser(Id:any){
   this.userdata.DeleteUserData(Id).subscribe((res:any)=>{
   
   if (res) {
      alert('User deleted');
      this.getUserData();
   } 
  
  }) 
  }
}
