import { Component } from '@angular/core';
import { Todo } from './todo';

const TODO = [
  new Todo("Todo 1"),
  new Todo("Todo 2"),
  new Todo("Todo 3")
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Todo';
  todolist : Array<Todo>
  newTodo : string
  editState : boolean

  constructor(){
    this.todolist = TODO
    this.newTodo = ''
    this.editState = false
  }

  deleteTodo(index){
    this.todolist.splice(index, 1)
  }

  addTodo(event){
    if(this.newTodo){
      this.todolist.push(new Todo(this.newTodo))
      this.newTodo = "";
    }else{
      alert("Please fill in the name!")
    }
  }

  editTodo(index){
    return 1
  }

}
