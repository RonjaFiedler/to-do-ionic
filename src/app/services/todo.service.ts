import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private storageKey = 'todos';

  private todos$ = new BehaviorSubject<Todo[]>(this.loadTodos());

  constructor() {}


  getTodos() {
    return this.todos$.asObservable();
  }


  addTodo(todoText: string, priority: number) {
    const todos = this.loadTodos();

    const newTodo: Todo = {
      id: Date.now(),
      todo: todoText,
      priority,
      done: false,
    };

    todos.push(newTodo);
    this.save(todos);
  }


  toggleDone(id: number) {
    const todos = this.loadTodos().map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );

    this.save(todos);
  }


  deleteTodo(id: number) {
    const todos = this.loadTodos().filter(t => t.id !== id);
    this.save(todos);
  }


  clearAll() {
    localStorage.removeItem(this.storageKey);
    this.todos$.next([]);
  }


  private loadTodos(): Todo[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private save(todos: Todo[]) {

    const sorted = todos.sort((a, b) => a.priority - b.priority);

    localStorage.setItem(this.storageKey, JSON.stringify(sorted));
    this.todos$.next(sorted);
  }
}