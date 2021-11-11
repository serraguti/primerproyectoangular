import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class Deportes{
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.numeros = [16, 12, 44, 55, 14, 22, 19, 21];
        this.sports = ["Petanca", "Curling", "Canicas", "Futbol", "Tenis", "Basket"];
    }
}