import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoFetcherService } from "../../services/todo-fetcher.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todo: Todo // The corresponding HTML needs to read the To-Do objects defined in the model
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor(private todosService: TodoFetcherService) { }

  ngOnInit(): void {}

  // Set classes dynamically for the html.
  setClasses() { return {todo: true, 'is-complete': this.todo.completed} }

  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed
    // toggle on server
    this.todosService.toggleCompleted(todo).subscribe(todo=> console.log(todo))
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)
  }

}
