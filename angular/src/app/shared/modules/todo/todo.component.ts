import { Component, OnInit } from '@angular/core';
// declare var Ps: any;

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    newName: string;
    nameList: Array<string>;

    constructor() {
        this.nameList = [
            'Meeting with Nabindar Singh.',
            'Exercise at 6:pm with Nicholas.',
            'Avengers Age of Ultron.',
            'Henna birthday at Mezbaan.'
        ];
    }

    addName(): boolean {
        this.nameList.unshift(this.newName);
        this.newName = '';
        return true;
    }

    ngOnInit() {
        // Ps.initialize(document.querySelector('.todo-list-wrap'));
    }

}
