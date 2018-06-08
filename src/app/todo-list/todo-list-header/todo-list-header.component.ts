import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit{
  constructor(public data: DataService) {
  }

  @Input() newTodo: "";

  onEnter(e) {
    this.data.addItem(this.newTodo);
    this.newTodo = "";
  }

  ngOnInit() {
  }
}
