import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }
  

}
