import { Controller, Get, Post, Body, Param, Patch, BadRequestException } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { Mantenimiento } from './mantenimiento.entity';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';

@Controller('mantenimientos')
export class MantenimientosController {
  constructor(private readonly mantenimientosService: MantenimientosService) {}

  @Get()
  findAll(): Promise<Mantenimiento[]> {
    return this.mantenimientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Mantenimiento> {
    return this.mantenimientosService.findOne(id);
  }
  @Post()
  create(@Body() createMantenimientoDto: CreateMantenimientoDto): Promise<Mantenimiento> {
    const { unidadId, ...mantenimientoData } = createMantenimientoDto;
    if (!unidadId) {
      throw new BadRequestException('unidadId es obligatorio.');
    }
    return this.mantenimientosService.create(mantenimientoData, unidadId);
  }
  

  @Patch('complete/:id')
  complete(@Param('id') id: number, @Body() updateData: Partial<Mantenimiento>): Promise<Mantenimiento> {
    return this.mantenimientosService.completeMantenimiento(id, updateData);
  }
}

