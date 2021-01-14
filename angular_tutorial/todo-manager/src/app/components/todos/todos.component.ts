import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoFetcherService } from '../../services/todo-fetcher.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  interval: number;

  constructor(private todoService: TodoFetcherService) { }

  // Grab the TODOS from a service we created in src/app/services/todo-fetcher.service
  ngOnInit(): void {
    // this.todos = this.todoService.getTodos() // Can no longer do this code if we work with ASYNC code
    // this.todoService.getTodos().subscribe(todos => {
    //   this.todos = todos
    // })  // subscribe() waits for the uri

    // ASYNC RELOAD TESTING
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
    this.interval = setInterval(() => {
      this.todoService.getTodos().subscribe((todos) => this.todos = todos);
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  deleteTodo(todo: Todo): void {
    console.log(`Delete ${todo.title}`)
    // UI removal
    this.todos = this.todos.filter(t => t.id != todo.id) // like python's filter. Delete from array.
    // server removal
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo): void {
    console.log(`Adding ${todo.title}`)
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }
}


