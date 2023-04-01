import { ContactoService } from '../../services/contacto.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = {
    nombre_cliente: '',
    telefono: '',
    descripcion: '',
    correoElectronico: ''
  };

  mensaje: string = '';

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactoService.guardarContacto(this.contacto).subscribe(
      res => {
        console.log(res);
        this.mensaje = res.message;
      },
      err => console.log(err)
    );
  }

}