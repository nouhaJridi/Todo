import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todos: Todo[] = [] ;

 constructor() { }

 getTodo(): Todo[]{
   return this.todos;
 }
 logger(): void{
 console.log(this.todos);
 }
 addTodo(todo: Todo): void{
   if(!this.todos.length) {
   todo.id = 0;
   }
   else {
    todo.id = this.todos[this.todos.length - 1].id + 1;
   }
   this.todos.push(todo);
 }

 deleteTodo(todo: Todo): void{
 const index = this.todos.indexOf(todo);
 this.todos.splice(index, 1);
 }

}
