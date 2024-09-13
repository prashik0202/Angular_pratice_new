import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './singletask.model';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-singletask',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css'
})

export class SingletaskComponent {
  @Input({ required : true }) singleTask!:Task;
  @Output() complete = new EventEmitter<string>();

  // method 
  onCompleteTask(){
    this.complete.emit(this.singleTask.id);
  }
}
