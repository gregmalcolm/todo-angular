import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListHeaderComponent } from './todo-list/todo-list-header/todo-list-header.component';
import { TodoListContentComponent } from './todo-list/todo-list-content/todo-list-content.component';
import { TodoListFooterComponent } from './todo-list/todo-list-footer/todo-list-footer.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListContentComponent,
    TodoListFooterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
