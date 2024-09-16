import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';
import { type User } from './user.model';
// import { DUMMY_USERS } from '../dummy_users';

// geting radom users index
// let index = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[index]);

  // computed is executed when the signal recieve a new value
  // imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar)

  // its getter ans setter of Ts
  // get profileImg(){
  //   return 'assets/users/ + this.selectedUser.avatar;
  // }

  // onclick function
  // on click of button we need to change the user display

  //#################### ABOVE CODE IS USING ###################
  // @Input({ required : true }) id!:string;
  // @Input({ required : true }) avatar!:string;
  // @Input({ required : true }) name!:string;

  @Input({ required : true }) users! : User;
  @Output() select = new EventEmitter<string>();

  // alternative of the 'Output' Decorator using output used in new version
  // select = output<string>(); // this not a signal 

  // this inout signal are readonly
  // i.e you cannot change the values inside this component
  //---------------------------------------------------------
  // NOTE : but the below approach is not used in older versions
  //-------------------------------------------------------------
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => '/assets/users/' + this.avatar());

  get imagePath(){
    return 'assets/users/' + this.users.avatar;
  }

  onSelectUser(){
    // let index = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[index]);
    this.select.emit(this.users.id);
    // this.select.emit(this.name);
  }
}   
