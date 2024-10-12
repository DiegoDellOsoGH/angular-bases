/*
import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template:'<h1>Hola Counter</h1>'
})
export class CounterComponent{

}
*/

// --------------------------------------------------------------------------------------

/*
// -- Creado por medio del "a-component" (Angular Snippets)
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
*/

// --------------------------------------------------------------------------------------

import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `

        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="ResetCounter(10)">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>

    `
})
export class CounterComponent{
    public counter: number = 10;

    increaseBy(value: number):void{
        this.counter += value;
    }

    ResetCounter(value: number):void{
        this.counter = value;
    }
}
