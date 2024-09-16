import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // return type void because it doesn't contain data;
  @Input({ required : true }) userId!: string
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<newTaskData>();

  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    console.log("onCancel Excuted")
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addUserTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    }, this.userId)
    this.close.emit();
  }
}
