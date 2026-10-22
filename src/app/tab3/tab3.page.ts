import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  standalone: true, 
  imports: [IonicModule,CommonModule,FormsModule]
  
})
export class Tab3Page {

  constructor(private todoService: TodoService) {}

  reset() {
    this.todoService.clearAll();
  }
}