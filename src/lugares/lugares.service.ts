import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lugar } from './lugar.entity';
import { CreateLugarDto } from './dto/create-lugar.dto';

@Injectable()
export class LugaresService {
  constructor(
    @InjectRepository(Lugar)
    private lugaresRepository: Repository<Lugar>,
  ) {}

  findAll(): Promise<Lugar[]> {
    return this.lugaresRepository.find();
  }

  findOne(id: number): Promise<Lugar> {
    return this.lugaresRepository.findOneBy({ id });
  }

  create(createLugarDto: CreateLugarDto): Promise<Lugar> {
    const lugar = this.lugaresRepository.create(createLugarDto);
    return this.lugaresRepository.save(lugar);
  }

  async remove(id: number): Promise<void> {
    await this.lugaresRepository.delete(id);
  }
}
