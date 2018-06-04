import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListContentComponent } from './todo-list-content.component';

describe('TodoListContentComponent', () => {
  let component: TodoListContentComponent;
  let fixture: ComponentFixture<TodoListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
