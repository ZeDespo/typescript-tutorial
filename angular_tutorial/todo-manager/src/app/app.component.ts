import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'To-Do Manager';
  author: string = "Alex Despotakis";

  constructor() {
    console.log("Reached landing page!")
  }
}
