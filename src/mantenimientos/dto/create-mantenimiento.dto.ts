import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateMantenimientoDto {
  @IsString()
  tipo: string;

  @IsDateString()
  fecha: string;

  @IsString()
  diagnostico: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  costo: number;

  @IsOptional() 
  @IsNumber()
  unidadId?: number;
}
