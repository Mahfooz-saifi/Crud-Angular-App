import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user-interfaces/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  editMode = false;
  userData: undefined | User
  messageAlert: undefined | string;
  constructor(private router: Router, private route: ActivatedRoute, private users: UsersService) { }
  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('id')
    this.editMode = false;
    userId && this.users.getUser(userId).subscribe((res: any) => {
      this.userData = res;
    })
  }

  //save and update record

  addUser(data: User) {
    // debugger;
    if (this.userData) {
      data.id = this.userData.id;
      this.users.updateUserData(data).subscribe((res:any) => {
        // console.log('update data', res)
        alert('User Updated successfully');
        this.router.navigate(['/'])
      })
    }
    else {
      // debugger;
      this.users.AddUser(data).subscribe((res: any) => {
        if (res) {
          // console.log('add', res)
          // this.messageAlert = "User Successfully Added"
          this.router.navigate(['/'])
        }
      })
    }
  }
}
