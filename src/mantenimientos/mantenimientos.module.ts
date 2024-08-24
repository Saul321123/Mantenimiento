import { Module } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { MantenimientosController } from './mantenimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mantenimiento } from './mantenimiento.entity';
import { Unidad } from '../unidades/unidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mantenimiento, Unidad]), // Asegúrate de incluir Unidad aquí
  ],
  providers: [MantenimientosService],
  controllers: [MantenimientosController],
  exports: [MantenimientosService], // Exporta el servicio si es necesario en otros módulos
})
export class MantenimientosModule {}


