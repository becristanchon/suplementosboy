import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() terminoBusquedaEmitter = new EventEmitter<string>();

  onBuscar(event: any) {
    this.terminoBusquedaEmitter.emit(event.target.value);
  }
}