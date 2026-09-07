import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';
import { EmpleadoRequest } from '../models/empleado-request';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }

  cambiarEstado(id: number): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.url}/${id}/asistencia`, {});
  }

  create(empleado: EmpleadoRequest): Observable<Empleado>{
    return this.http.post<Empleado>(this.url, empleado);
  }
  
  

}
