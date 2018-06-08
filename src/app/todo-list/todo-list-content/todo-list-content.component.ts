import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list-content',
  templateUrl: './todo-list-content.component.html',
  styleUrls: ['./todo-list-content.component.css']
})
export class TodoListContentComponent implements OnInit{
  todos: Todo[];
  
  public ngOnInit() {
    this.todos = [ new Todo("meow"), new Todo("right now", true)];
  }
}
