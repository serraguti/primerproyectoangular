import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje: string;

    constructor(){
        console.log("Constructor, yo voy primero");
        this.mensaje = "Mensaje desde Component";
    }

    ngOnInit(): void {
        console.log("ngOnInit(): Ejecutando después del constructor");
    }

    ngDoCheck() {
        console.log("ngDoCheck(): La vista ha cambiado");
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy(): Componente destruido");
    }

    cambiarMensaje(): void {
        this.mensaje = "Single Day!!!";
    }
}