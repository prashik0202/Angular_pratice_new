import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy_users';


@Component({
  selector: 'app-root-new',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // this user variable can be access in html template i.e app.component.html
  // using this variable we are applying for loop to display users
  users = DUMMY_USERS;

  selectedUserId?: string;

  // this basically give the slected user tasks
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    console.log(id);
    // setting the userid to variable i.e selectedUserId
    this.selectedUserId = id; 
  }


}
