import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
