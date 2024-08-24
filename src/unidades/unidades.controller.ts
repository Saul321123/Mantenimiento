import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidad } from './unidad.entity';
import { CreateUnidadDto } from './dto/create-unidad.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Get()
  findAll(): Promise<Unidad[]> {
    return this.unidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Unidad> {
    return this.unidadesService.findOne(id);
  }

  @Post()
  async create(@Body() createUnidadDto: CreateUnidadDto) {
    try {
      console.log('Datos recibidos:', createUnidadDto);
      return await this.unidadesService.create(createUnidadDto);
    } catch (error) {
      console.error('Error al crear la unidad:', error);
      throw error;  // Lanzar el error para que el cliente reciba el código 500
    }
  }
  

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.unidadesService.remove(id);
  }

  @Patch('update/:id')
updateEstado(@Param('id') id: number, @Body('estado') estado: 'disponible' | 'asignado' | 'en mantenimiento' | 'baja'): Promise<Unidad> {
  return this.unidadesService.updateEstado(id, estado);
}

}

