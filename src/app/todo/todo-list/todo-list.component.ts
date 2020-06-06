import { Component, Input } from '@angular/core';

export interface Todo {
  id: string;
  title: string;
  description: string;
  author: string;
  priority: string;
  date: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: Todo[];
  index: number;
  searchInput: string;
  search = '';
  searchField = 'title'; // by default

  // handleTodoDelete(index: number): void {
  //   this.todos.splice(index, 1);
  // }
  handleTodoDelete(id: string) {
    let obj = this.todos.find((obj) => obj.id === id);
    if (this.todos.indexOf(obj) !== -1) {
      // indexOf returneaza -1 in cazul in care obiectull nu a fost gasit in array, altfel returneaza pozitia in array
      this.todos.splice(this.todos.indexOf(obj), 1); // sterge din array indexul ientificat al obiectului + o pozitie
    }
  }
  ngDoCheck() {
    console.log(this.todos);
  }
}
