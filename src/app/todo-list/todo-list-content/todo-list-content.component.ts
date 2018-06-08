import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-content',
  templateUrl: './todo-list-content.component.html',
  styleUrls: ['./todo-list-content.component.css']
})
export class TodoListContentComponent implements OnInit{  
  todos: Todo[];

  constructor(public data: DataService) {
  }

  public ngOnInit() {
    this.todos = this.data.todos;
  }
}
