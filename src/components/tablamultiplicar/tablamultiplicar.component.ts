import { Component, ViewChild, ElementRef } from "@angular/core";

@Component ({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicar{
    @ViewChild("cajanumero") cajanumero!: ElementRef;
    public numeros!: Array<number>;
    public numero!: number;

    constructor() {
        this.numeros = new Array<number>();
    }

    generarTablaMultiplicar(): void{
        this.numero = parseInt(this.cajanumero.nativeElement.value);
        this.numeros = new Array<number>();
        for (var i = 1; i <= 10; i++) {
            var operacion = this.numero * i;
            this.numeros.push(operacion);
        }
    }
}