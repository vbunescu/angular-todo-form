import { Component } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  // search = '';
  // searchField = 'title'; // by default

  todos: Todo[] = [
    { title: 'create App', description: 'use Angular' },
    { title: 'Buy products', description: 'In Linnela' },
    { title: 'Buy fromage', description: 'In Market' },
    { title: 'Buy milk', description: 'In Green Hills' },
  ];

  handleTodoSubmited({ title, description }: Todo): void {
    const isTodoAlreadyExists = this.todos.some(
      (todo: Todo) => title === todo.title && description === todo.description
    );

    if (!isTodoAlreadyExists) {
      this.todos.push({ title: title, description: description });
    }
  }
}
