
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    FormsModule
  ]
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

    this.todoService.addTodo(this.todoText.trim(), Number(this.priority));

    this.todoText = '';
    this.priority = 1;

    this.modalCtrl.dismiss();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
