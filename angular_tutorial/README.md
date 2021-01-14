# ANGULAR TUTORIAL

### The Angular way:
1. Use TypeScript for static types
2. Reusable components for the front end
3. Use "services" to share data/functionality between components to solve state issues
4. Concept of "modules", like Python. Custom modules = less need to download outside code
5. Uses OBSERVABLES (not promises) for async operations
6. Steep learning curve, but there's a lot to it that makes it worth it. 

### Reusable components
- Look at each part of the UI as a separate component
- Think of the application in terms of components, not as separate pieces of HTML 

### Anatomy of a component
```typescript
import {Component, OnInit} from '@angular/core';

@Component({ // Typescript decorator begins here
    selector: 'app-root', // The HTML tag we want to insert data into (found in src/index.html)
    templateUrl: './app.component.html', // The HTML template to insert defined variables into with string interpolation (if name is defined here, fill in all instances in html with {{ name }}.).
    styleUrls: ['./app.component.css'] // The style sheet(s) associated with the component.
}) // Typescript decorator ends here
export class AppComponentExample implements OnInit { // inherit OnInit. Lifecyle method that runs on component creation.
    name: string = "Alex"
    age: number = 28

    constructor() {} // Import services to use with the parameters
    
    ngOnInit() {
        // runs when component is created.
    }

}
```

### Using the Angular CLI
- `ng new myapp`
    - Create a new Angular application
- `ng serve`
    - Run the dev server
- `ng build`
    - Build static assets
- `ng generate {component/service/module} mything`
    - Generate a new component, service or module with a given name
    
### Note on State management
You can use Redux or ngrx for state managers with larger apps, but Angular's state management is
definitely good enough for smaller apps

### A look at the files
*Note: This tutorial will be based on our app: `todo-manager`*
- /package.json
    - Includes everything angular installed for you upon creating, dependencies, scripts, and dev dependencies
    the angular environment needs. 
    - Includes Karma to test your front end applications
- /src/index.html
    - THE main page that loads in the browser.
    - Upon creation, you'll find these lines
        ```html
        <body>
          <app-root></app-root>
        </body>
        ```
    - Every single component we create will go inside the `<app-root>` tag
- /angular.json
    - If you want to include things like Bootstrap, here's the file to include them in.
    - There are a lot of options 
- /src/app/app.module.ts
    - The entry point to Angular. Meeting place of all components
    -  Decorator `@NgModule` is the root app module
        - declarations: Where the components go when added with CLI
        - imports: The angular modules you need to import for the project
        - providers: services to include
        - bootstrap: the main app component
- /src/app/app.component.ts
    - The main app component!
    - This was explained above in the "anatomy of a component"
    - The class `AppComponent` is an example of a component. 
        - It can be extended to include an author, so long as you add a corresponding `{{ author }}` somewhere in the 
        src/index.html file
        - You can also add methods / constructors
        
    ### Create a new component
    - Create a new component for the project. 
    - `ng generate component components/Todos` generates the src/app/components directory (if not exists) and creates 
    the bare basics for the new component. 
        - HTML, CSS, and two TypeScript files
    - The src/app/components/todos.component.ts looks almost the same as the initial src/app/app.component.ts; however...
        - A constructor, along with a new method `ngOnInit()` is created
        - ngOnInit is a lifecycle method. Works like the constructor in the sense it runs right away; HOWEVER
        remember that the constructor is in charge of importing services ONLY. ngOnInit will run code!
    - Edit src/app/app.component.html to include the newly created component. 
    - If it does not exist, create the directory src/app/models
    - Add the new model in the form of a class. 
    - Edit src/app/components/todos.component.ts to include the newly created model, and what you want the component to 
    do.
    - Edit the corresponding todos.component.html file to include your changes.