import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable()
export class DataService {
  todos: Todo[];
  
  constructor() { 
    this.todos = [ 
      new Todo("Meow"), 
      new Todo("Right now", true)];    
  }

  addItem(title: string) {
    this.todos.push(new Todo(title))
  }
}
