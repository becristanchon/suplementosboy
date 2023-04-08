import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asesoriaprofesional',
  templateUrl: './asesoriaprofesional.component.html',
  styleUrls: ['./asesoriaprofesional.component.css']
})
export class AsesoriaprofesionalComponent {

  constructor(
   
    private router: Router
  ) { }

  
  onClick() {
        this.router.navigate(['/contacto']);
  }
}
