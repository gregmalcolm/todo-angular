import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent{
  @Input() todo: "";

  onEnter(e) {
    this.todo = "";
  }
}
