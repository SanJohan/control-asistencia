import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoListaComponent, EmpleadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
