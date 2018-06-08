import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [DataService],
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
