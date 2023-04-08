import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-pqrs',
  templateUrl: './boton-pqrs.component.html',
  styleUrls: ['./boton-pqrs.component.css']
})
export class BotonPQRSComponent {

  constructor(
   
    private router: Router
  ) { }

  
  onClick() {
        this.router.navigate(['/formulariopqrs']);
  }


}
