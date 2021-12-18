import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  faTimes = faTimes;

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task);
  }
}
