import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidad } from './unidad.entity';
import { CreateUnidadDto } from './dto/create-unidad.dto';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Unidad)
    private unidadesRepository: Repository<Unidad>,
  ) {}

  findAll(): Promise<Unidad[]> {
    return this.unidadesRepository.find();
  }

  findOne(id: number): Promise<Unidad> {
    return this.unidadesRepository.findOneBy({ id });
  }

  create(createUnidadDto: CreateUnidadDto): Promise<Unidad> {
    const unidad = this.unidadesRepository.create(createUnidadDto);
    return this.unidadesRepository.save(unidad);
  }

  async remove(id: number): Promise<void> {
    await this.unidadesRepository.delete(id);
  }

  async updateEstado(id: number, estado: 'disponible' | 'asignado' | 'en mantenimiento' | 'baja'): Promise<Unidad> {
    await this.unidadesRepository.update(id, { estado });
    return this.findOne(id);
  }
}
