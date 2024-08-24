import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Mantenimiento } from '../mantenimientos/mantenimiento.entity';

@Entity()
export class Unidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  tipo: string;

  @Column()
  color: string;

  @Column()
  numeroPlaca: string;

  @Column()
  kilometrajeActual: number;

  @Column()
  fechaUltimoMantenimiento: Date;

  @Column()
  kilometrajeUltimoMantenimiento: number;

  @Column()
  nivelGasolina: number;

  @Column()
  estado: 'disponible' | 'asignado' | 'en mantenimiento' | 'baja';

  // Aquí defines la relación inversa
  @OneToMany(() => Mantenimiento, mantenimiento => mantenimiento.unidad)
  mantenimientos: Mantenimiento[];
}
