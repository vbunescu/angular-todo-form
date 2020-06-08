import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete = new EventEmitter<string>(); // va returna indexul care trebuie sters in elemntul parinte
  // @Output() todoEdited = new EventEmitter<Todo>();
  constructor(public dialog: MatDialog) {}

  onDelete() {
    this.todoDelete.emit(this.todo.id);
    // console.log(this.todo);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TodoEditComponent, {
      data: this.todo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.todo = result;
    });
  }
}
