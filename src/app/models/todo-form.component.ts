import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../services/todo.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  standalone: true, 
  imports: [IonicModule,CommonModule,FormsModule]

})
export class TodoFormComponent {

  todoText = '';
  priority = 1;

  constructor(
    private modalCtrl: ModalController,
    private todoService: TodoService
  ) {}

  addTodo() {
    if (!this.todoText.trim()) return;

    this.todoService.addTodo(this.todoText, this.priority);

    this.todoText = '';
    this.priority = 1;

    this.modalCtrl.dismiss();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}