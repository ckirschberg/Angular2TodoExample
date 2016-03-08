import {Component} from 'angular2/core';
import {TodoListComponent} from "./todolist.component";

@Component({
    selector: 'my-app',
    template: `
    This is the app component
    <todo-list></todo-list>
    `,
    directives: [TodoListComponent]
})
export class AppComponent {

}