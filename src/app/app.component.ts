import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo App';
  todos: { text: string, completed: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleTodoCompletion(todo: { text: string, completed: boolean }) {
    todo.completed = !todo.completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
