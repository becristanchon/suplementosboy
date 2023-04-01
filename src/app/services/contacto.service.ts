import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost/servicios/servicio.php';

  constructor(private http: HttpClient) { }

  guardarContacto(contacto: Contacto): Observable<any> {
    return this.http.post<any>(this.apiUrl, contacto);
  }

}