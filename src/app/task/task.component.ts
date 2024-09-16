import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [SingletaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  // this are basically props to this component
  // this contain selected user name, id and avatar
  @Input({ required : true }) name!:string; 
  @Input({ required : true }) avatar!:string;
  @Input({ required : true }) userId!:string;

  isNewTaskOpen = false;

  get imageNewPath(){
    return 'assets/users/' + this.avatar;
  }

  // creating object of service class
  // private taskService = new TaskService();
  constructor(private taskService : TaskService){}

  get selectedUserTask(){
    return this.taskService.getUserTask(this.userId);
  }
  
  onStartAddTask(){
    console.log("onStartedAddTask Executed")
    this.isNewTaskOpen = true;
  } 

  onCloseAddTask(){
    console.log("onCloseAddTask Executed")
    this.isNewTaskOpen = false;
  }

}