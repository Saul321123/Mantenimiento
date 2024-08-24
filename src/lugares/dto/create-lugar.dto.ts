import { IsString } from 'class-validator';

export class CreateLugarDto {
  @IsString()
  nombre: string;
}
