import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-lista',
  standalone: true,
  imports: [],
  templateUrl: './empleado-lista.component.html',
  styleUrl: './empleado-lista.component.css'
})
export class EmpleadoListaComponent implements OnInit {

  empleados: Empleado[] = [];
  error: string = '';
  cargando: boolean = false;

  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(): void {
    this.cargar();
  }
  
  cargar(): void {
    this.cargando = true;
    this.empleadoService.getAll().subscribe({
      next: (datos) => {
        this.empleados = datos;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los empleados';
        this.cargando = false;
      }
    });
  }

  cambiarEstado(empleado: Empleado): void {
    this.empleadoService.cambiarEstado(empleado.id).subscribe({
      next: (actualizado) => {
        const i = this.empleados.findIndex(e => e.id === actualizado.id);
        this.empleados[i] = actualizado;
      },
      error: () => this.error = 'No se pudo cambiar el estado'
    });
  }

}
