import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list/todo-list.component';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() todoDelete = new EventEmitter<number>(); // va returna indexul care trebuie sters in elemntul parinte

  constructor(public dialog: MatDialog) {}

  onDelete() {
    this.todoDelete.emit(this.index);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TodoEditComponent, {
      data: { title: this.todo.title, description: this.todo.description },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.todo = result;
    });
  }
}
