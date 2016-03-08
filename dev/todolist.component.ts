import {Component} from 'angular2/core';

@Component({
    selector: 'todo-list',
    template: `
        <div class="page-header">
            <h1>
                {{model.user}}'s To Do List
                <span class="label label-default" [ngClass]="warningLevel()" [hidden]="incompleteCount() === 0">
                    {{incompleteCount()}}
                </span>
            </h1>

        </div>
        <div class="panel">
            <div class="input-group">
                <input class="form-control" [(ngModel)]="todoText"/>


                <span class="input-group-btn">
                    <button class="btn btn-default" (click)="addItem(todoText)">
                        Add
                    </button>
                </span>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>State</th>
                </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#item of model.items">
                        <td>{{item.action}}</td>
                        <td>
                            <input type="checkbox" [(ngModel)]="item.done" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class TodoListComponent {
    public model = {
        user: "Peter",
        items: [{action: "Buy Flowers", done: false},
            {action: "Get Shoes", done: false},
            {action: "Collect Tickets", done: true},
            {action: "Call Joe", done: false}
        ]
    };

    addItem(todoText:string):void {
        this.model.items.push({action: todoText, done: false});
    }

    incompleteCount():number {
        var count:number = 0;

        for (var i:number = 0; i < this.model.items.length; i++) {
            if (!this.model.items[i].done) {
                count++;
            }
        }

        return count;
    }

    warningLevel():string {
        return this.incompleteCount() < 3 ? 'label-success' : 'label-warning';
    }
}