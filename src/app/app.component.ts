import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre: string;
  public numero:  number;
  constructor(){
    this.nombre = "Alumno Angular";
    this.numero = 14;
  }
  title = 'primerproyecto';
}
