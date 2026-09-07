export interface Empleado {
  id: number;
  nombreCompleto: string;
  puesto: string;
  estado: 'PRESENTE' | 'AUSENTE';
}