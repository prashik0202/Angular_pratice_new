import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../singletask/singletask.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // return type void because it doesn't contain data;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    });
  }
}
