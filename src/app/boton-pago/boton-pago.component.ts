import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-pago',
  templateUrl: './boton-pago.component.html',
  styleUrls: ['./boton-pago.component.css']
})

export class BotonPagoComponent {
  constructor(
   
    private router: Router
  ) { }

  
  onClick() {
    this.router.navigate(['/inicio']);
  }
}
