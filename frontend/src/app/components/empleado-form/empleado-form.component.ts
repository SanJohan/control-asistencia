import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {
  @Output() empleadoCreado = new EventEmitter<void>();

   errorBackend: string = '';

   form = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.maxLength(100)]],
    puesto: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService) {}

    onSubmit(): void {
    this.errorBackend = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.empleadoService.create(this.form.getRawValue() as any).subscribe({
      next: () => {
        this.form.reset();
        this.empleadoCreado.emit();
      },
      error: (err) => {
        this.errorBackend = err.error?.message ?? 'No se pudo registrar el empleado';
      }
    });
  }

}
