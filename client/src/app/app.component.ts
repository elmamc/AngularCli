import { Component } from '@angular/core';
import { Todos } from 'server/collections/todo.collection';
import { ToDo } from 'server/models/collection.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<ToDo[]>;
  constructor() {
    this.todos = Todos.find({});
  }

  removeTodo(todo: ToDo): void {

    Todos.remove(todo._id);

  }
  toggleChecked(todo: ToDo): void {
    Todos.update(todo._id, {
      $set: {checked: !todo.checked},
    });

  }
}
