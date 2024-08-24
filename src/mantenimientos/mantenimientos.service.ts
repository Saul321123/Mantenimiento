import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mantenimiento } from './mantenimiento.entity';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { Unidad } from '../unidades/unidad.entity';

@Injectable()
export class MantenimientosService {
  constructor(
    @InjectRepository(Mantenimiento)
    private mantenimientosRepository: Repository<Mantenimiento>,
    @InjectRepository(Unidad)
    private unidadesRepository: Repository<Unidad>,
  ) {}

  async create(createMantenimientoDto: CreateMantenimientoDto, unidadId: number): Promise<Mantenimiento> {
    const mantenimiento = this.mantenimientosRepository.create(createMantenimientoDto);
    const unidad = await this.unidadesRepository.findOneBy({ id: unidadId });
    mantenimiento.unidad = unidad;
    await this.mantenimientosRepository.save(mantenimiento);
    await this.unidadesRepository.update(unidadId, { estado: 'en mantenimiento' });
    return mantenimiento;
  }

  findAll(): Promise<Mantenimiento[]> {
    return this.mantenimientosRepository.find({ relations: ['unidad'] });
  }

  findOne(id: number): Promise<Mantenimiento> {
    return this.mantenimientosRepository.findOneBy({ id });
  }

  async completeMantenimiento(id: number, updateData: Partial<Mantenimiento>): Promise<Mantenimiento> {
    await this.mantenimientosRepository.update(id, updateData);
    const mantenimiento = await this.mantenimientosRepository.findOneBy({ id });
    await this.unidadesRepository.update(mantenimiento.unidad.id, { estado: 'disponible' });
    return mantenimiento;
  }
}

