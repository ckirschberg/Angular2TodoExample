System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                    this.model = {
                        user: "Peter",
                        items: [{ action: "Buy Flowers", done: false },
                            { action: "Get Shoes", done: false },
                            { action: "Collect Tickets", done: true },
                            { action: "Call Joe", done: false }
                        ]
                    };
                }
                TodoListComponent.prototype.addItem = function (todoText) {
                    this.model.items.push({ action: todoText, done: false });
                };
                TodoListComponent.prototype.incompleteCount = function () {
                    var count = 0;
                    for (var i = 0; i < this.model.items.length; i++) {
                        if (!this.model.items[i].done) {
                            count++;
                        }
                    }
                    return count;
                };
                TodoListComponent.prototype.warningLevel = function () {
                    return this.incompleteCount() < 3 ? 'label-success' : 'label-warning';
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n        <div class=\"page-header\">\n            <h1>\n                {{model.user}}'s To Do List\n                <span class=\"label label-default\" [ngClass]=\"warningLevel()\" [hidden]=\"incompleteCount() === 0\">\n                    {{incompleteCount()}}\n                </span>\n            </h1>\n\n        </div>\n        <div class=\"panel\">\n            <div class=\"input-group\">\n                <input class=\"form-control\" [(ngModel)]=\"todoText\"/>\n\n\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(todoText)\">\n                        Add\n                    </button>\n                </span>\n            </div>\n            <table class=\"table table-striped\">\n                <thead>\n                <tr>\n                    <th>Description</th>\n                    <th>State</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"#item of model.items\">\n                        <td>{{item.action}}</td>\n                        <td>\n                            <input type=\"checkbox\" [(ngModel)]=\"item.done\" />\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            })();
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUb2RvTGlzdENvbXBvbmVudCIsIlRvZG9MaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVG9kb0xpc3RDb21wb25lbnQuYWRkSXRlbSIsIlRvZG9MaXN0Q29tcG9uZW50LmluY29tcGxldGVDb3VudCIsIlRvZG9MaXN0Q29tcG9uZW50Lndhcm5pbmdMZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQTRDV0MsVUFBS0EsR0FBR0E7d0JBQ1hBLElBQUlBLEVBQUVBLE9BQU9BO3dCQUNiQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxNQUFNQSxFQUFFQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFDQTs0QkFDeENBLEVBQUNBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBOzRCQUNsQ0EsRUFBQ0EsTUFBTUEsRUFBRUEsaUJBQWlCQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFDQTs0QkFDdkNBLEVBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBO3lCQUNwQ0E7cUJBQ0pBLENBQUNBO2dCQXFCTkEsQ0FBQ0E7Z0JBbkJHRCxtQ0FBT0EsR0FBUEEsVUFBUUEsUUFBZUE7b0JBQ25CRSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFDQSxNQUFNQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVERiwyQ0FBZUEsR0FBZkE7b0JBQ0lHLElBQUlBLEtBQUtBLEdBQVVBLENBQUNBLENBQUNBO29CQUVyQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7d0JBQ3REQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDNUJBLEtBQUtBLEVBQUVBLENBQUNBO3dCQUNaQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7b0JBRURBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7Z0JBRURILHdDQUFZQSxHQUFaQTtvQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsR0FBR0EsQ0FBQ0EsR0FBR0EsZUFBZUEsR0FBR0EsZUFBZUEsQ0FBQ0E7Z0JBQzFFQSxDQUFDQTtnQkF2RUxKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsUUFBUUEsRUFBRUEscXlDQXNDVEE7cUJBQ0pBLENBQUNBOztzQ0ErQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0F4RUEsQUF3RUNBLElBQUE7WUF4RUQsaURBd0VDLENBQUEiLCJmaWxlIjoidG9kb2xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RvZG8tbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAge3ttb2RlbC51c2VyfX0ncyBUbyBEbyBMaXN0XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1kZWZhdWx0XCIgW25nQ2xhc3NdPVwid2FybmluZ0xldmVsKClcIiBbaGlkZGVuXT1cImluY29tcGxldGVDb3VudCgpID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7aW5jb21wbGV0ZUNvdW50KCl9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJ0b2RvVGV4dFwiLz5cblxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJhZGRJdGVtKHRvZG9UZXh0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNpdGVtIG9mIG1vZGVsLml0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmFjdGlvbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLmRvbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgICAgIHVzZXI6IFwiUGV0ZXJcIixcbiAgICAgICAgaXRlbXM6IFt7YWN0aW9uOiBcIkJ1eSBGbG93ZXJzXCIsIGRvbmU6IGZhbHNlfSxcbiAgICAgICAgICAgIHthY3Rpb246IFwiR2V0IFNob2VzXCIsIGRvbmU6IGZhbHNlfSxcbiAgICAgICAgICAgIHthY3Rpb246IFwiQ29sbGVjdCBUaWNrZXRzXCIsIGRvbmU6IHRydWV9LFxuICAgICAgICAgICAge2FjdGlvbjogXCJDYWxsIEpvZVwiLCBkb25lOiBmYWxzZX1cbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBhZGRJdGVtKHRvZG9UZXh0OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMubW9kZWwuaXRlbXMucHVzaCh7YWN0aW9uOiB0b2RvVGV4dCwgZG9uZTogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBpbmNvbXBsZXRlQ291bnQoKTpudW1iZXIge1xuICAgICAgICB2YXIgY291bnQ6bnVtYmVyID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCB0aGlzLm1vZGVsLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXRlbXNbaV0uZG9uZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgd2FybmluZ0xldmVsKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5jb21wbGV0ZUNvdW50KCkgPCAzID8gJ2xhYmVsLXN1Y2Nlc3MnIDogJ2xhYmVsLXdhcm5pbmcnO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
