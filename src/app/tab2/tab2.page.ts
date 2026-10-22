import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.models';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true, 
  imports: [IonicModule,CommonModule,FormsModule]
})
export class Tab2Page implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.filter(t => t.done);
    });
  }

  toggle(todo: Todo) {
    this.todoService.toggleDone(todo.id);
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }

  getColor(priority: any) {
    const p = parseInt(priority,10);
    switch (p) {
      case 1: return '#bed3ff';
      case 2: return '#c5fab4';
      case 3: return '#faf5b1';
      case 4: return '#f1d5a6';
      case 5: return '#ffbbbb';
      default: return 'transparent';
    }
  }
}