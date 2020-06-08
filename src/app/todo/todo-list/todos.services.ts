import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

const TODOS: Todo[] = [
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

@Injectable({ providedIn: 'root' })
export class TodosServices {
  getTodos(): Todo[] {
    return TODOS;
  }
}
