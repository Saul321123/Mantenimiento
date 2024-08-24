import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { Lugar } from './lugar.entity';
import { CreateLugarDto } from './dto/create-lugar.dto';

@Controller('lugares')
export class LugaresController {
  constructor(private readonly lugaresService: LugaresService) {}

  @Get()
  findAll(): Promise<Lugar[]> {
    return this.lugaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Lugar> {
    return this.lugaresService.findOne(id);
  }

  @Post()
  create(@Body() createLugarDto: CreateLugarDto): Promise<Lugar> {
    return this.lugaresService.create(createLugarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.lugaresService.remove(id);
  }
}

