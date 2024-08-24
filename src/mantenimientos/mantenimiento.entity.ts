import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Unidad } from '../unidades/unidad.entity';

@Entity()
export class Mantenimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  tipo: string;

  @Column()
  diagnostico: string;

  @Column()
  descripcion: string;

  @Column()
  costo: number;

  @ManyToOne(() => Unidad, unidad => unidad.mantenimientos)
  unidad: Unidad;
}


