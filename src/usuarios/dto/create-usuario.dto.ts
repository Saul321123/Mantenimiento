import { IsString, IsEnum } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  correo: string;

  @IsString()
  contrasena: string;

  @IsEnum(['administrador', 'repartidor'])
  rol: 'administrador' | 'repartidor';
}
