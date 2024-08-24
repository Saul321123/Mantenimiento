import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}