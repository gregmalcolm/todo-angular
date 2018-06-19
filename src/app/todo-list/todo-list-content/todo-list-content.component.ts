import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

import { DataService } from '../data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-content',
  templateUrl: './todo-list-content.component.html',
  styleUrls: ['./todo-list-content.component.css'],
  animations: [
    trigger('completedState', [
      state('in', style({color: '0.4s'}))
    ])
  ],
})
export class TodoListContentComponent implements OnInit, OnChanges{  
  @Input()
  todos: Todo[];

  constructor(public data: DataService) {
  }

  public ngOnInit() {
    this.todos = this.data.todos;
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log("changes: ", changes);
  }
}
