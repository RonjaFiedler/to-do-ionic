import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.models';
import { TodoFormComponent } from '../models/todo-form.component';
import {
  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonFooter
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true, 
imports: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonFooter,
  CommonModule,
  FormsModule
]
})
export class Tab1Page implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.filter(t => !t.done);
    });
  }

  async openForm() {
    const modal = await this.modalCtrl.create({
      component: TodoFormComponent,
    });
    await modal.present();
  }

  toggle(todo: Todo) {
    this.todoService.toggleDone(todo.id);
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }

  getColor(priority: any) {
    const p = parseInt(priority,10)
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