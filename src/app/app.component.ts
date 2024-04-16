import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todo: string = '';
    todos: { text: string, deleted: boolean }[] = [];

    add() {
        this.todos.push({ text: this.todo, deleted: false })
        this.todo = '';
    }

    remove(index: number) {
        if (confirm('Are you sure you want to delete this item?')) {
            this.todos[index].deleted = true;
            setTimeout(() => {
                this.todos.splice(index, 1);
            }, 50000); 
        }
    }
}
