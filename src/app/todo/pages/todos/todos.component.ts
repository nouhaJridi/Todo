import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodo();
  }
  addTodo(): void{
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  delete(todo: Todo): void{
  this.todoService.deleteTodo(todo);
  }

}
