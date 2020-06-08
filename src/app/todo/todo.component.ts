import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosServices } from './todo-list/todos.services';
import { Todo } from './todo-list/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private todosService: TodosServices) {}

  todos: Todo[] = this.todosService.getTodos();

  handleTodoSubmited(newTodo: Todo): void {
    const isTodoAlreadyExists = this.todos.some((todo: Todo) => {
      newTodo.title === todo.title &&
        newTodo.description === todo.description &&
        newTodo.author === todo.author &&
        newTodo.priority === todo.priority &&
        newTodo.date === todo.date;
    });

    if (!isTodoAlreadyExists) {
      this.todos.unshift(newTodo);

      console.log('new TODO:', newTodo);
    }
  }
}
