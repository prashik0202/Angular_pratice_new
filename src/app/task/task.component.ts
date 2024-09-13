import { Component, Input } from '@angular/core';
import { SingletaskComponent } from './singletask/singletask.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './singletask/singletask.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SingletaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required : true }) name!:string;
  @Input({ required : true }) avatar!:string;
  @Input({ required : true }) userId!:string;

  isNewTaskOpen = false;

  get imageNewPath(){
    return 'assets/users/' + this.avatar;
  }

  // creating object of service class
  private taskService = new TaskService();

  get selectedUserTask(){
    return this.taskService.getUserTask(this.userId);
  }

  onCompleteTask(id : string){
    return this.taskService.deleteUserTask(id);
  }
  
  onStartAddTask(){
    this.isNewTaskOpen = true;
  } 

  onCancelAddTask(){
    this.isNewTaskOpen = false;
  }

  onAddTask(taskData : newTaskData){
    this.taskService.addUserTask(taskData, this.userId);
    this.isNewTaskOpen = false;
  }

}