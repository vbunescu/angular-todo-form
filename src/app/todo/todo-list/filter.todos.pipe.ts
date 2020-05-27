import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-list.component';

@Pipe({ name: 'filterTodos' })
export class FilterTodosPipe implements PipeTransform {
  transform(
    todos: Todo[],
    searchBy: string = '',
    field: string = 'title'
  ): Todo[] {
    if (!searchBy.trim()) {
      // daca searcBy va returna valori adevarate se va apolica metoda trim
      return todos;
    }

    // sa filtram textul todo dupa textul introdus in input
    return todos.filter((todo) => {
      // verificam daca in titlu si description exista stringul introdus in searchBy
      return todo[field].toLowerCase().includes(searchBy.toLowerCase());

      //   transform(todos: Todo[], searchBy: string | null): Todo[] {
      // return todos.filter((_, index: number) => {
      //   return (index + 1) % 2 != 0;
      //   return index;
      //
    });
  }
}
