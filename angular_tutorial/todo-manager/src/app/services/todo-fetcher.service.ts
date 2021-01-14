import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root' // Out of the box
})
export class TodoFetcherService {

  todoApiUrl = 'https://jsonplaceholder.typicode.com/todos';
  limit = '_limit=5';

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoApiUrl, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoApiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Get todos from the API
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoApiUrl}?${this.limit}`);
  }
  //   console.log("DUMMY DATA FILLING! Comment out if/when you use API")
  //   let i: number
  //   let todos: Todo[] = []
  //   for (i = 0; i < 3; i++) {
  //     let j: number = i + 1
  //     todos.push({id: j, title: "Todo " + j, "completed": j % 2 == 0})
  //   }
  //   return todos
  // }

  // Toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todoApiUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }


}


