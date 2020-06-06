import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo-list/todo-list.component';

@Pipe({ name: 'filterTodos', pure: false })
export class FilterTodosPipe implements PipeTransform {
  transform(
    todos: Todo[],
    searchBy: string = '',
    field: string = 'title'
  ): Todo[] {
    if (!searchBy.trim()) {
      return todos;
    }
    return todos.filter((todo) => {
      return todo[field].toLowerCase().includes(searchBy.toLowerCase());
    });
  }
}
