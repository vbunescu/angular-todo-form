import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Todo[] = [
    {
      id: 'dd32dsd-d-d23dd3d3d3d-ddesd',
      title: 'create App',
      description: 'use Angular',
      author: 'VBunescu',
      priority: '2',
      date: new Date(),
    },
    {
      id: 'dd32dsddsfsfdfsdfsd3d-ddesd',
      title: 'change color',
      description: 'use button',
      author: 'Victoria',
      priority: '1',
      date: new Date(),
    },
    {
      id: 'dd32dsfsdfdsfdshj3d3d3d-ddesd',
      title: 'delete form',
      description: 'delete button',
      author: 'Veronica',
      priority: '1',
      date: new Date(),
    },
  ];

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
