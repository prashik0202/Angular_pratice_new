import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './singletask.model';


import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-singletask',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css'
})

export class SingletaskComponent {
  @Input({ required : true }) singleTask!:Task;
  @Input({ required : true }) userId!:string;
  // @Output() complete = new EventEmitter<string>();

  private taskService = inject(TaskService);

  // method 
  onCompleteTask(){
    this.taskService.deleteUserTask(this.singleTask.id)
    // this.complete.emit(this.singleTask.id);
  }
}
