import { IsString, IsNumber, IsDateString, IsEnum } from 'class-validator';

export class CreateUnidadDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  tipo: string;

  @IsString()
  color: string;

  @IsString()
  numeroPlaca: string;

  @IsNumber()
  kilometrajeActual: number;

  @IsDateString()
  fechaUltimoMantenimiento: string;  // Cambiado a cadena

  @IsNumber()
  kilometrajeUltimoMantenimiento: number;

  @IsNumber()
  nivelGasolina: number;

  @IsEnum(['disponible', 'asignado', 'en mantenimiento', 'baja'])
  estado: 'disponible' | 'asignado' | 'en mantenimiento' | 'baja';
}
