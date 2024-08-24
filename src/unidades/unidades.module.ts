import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { Unidad } from './unidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unidad])],
  providers: [UnidadesService],
  controllers: [UnidadesController],
})
export class UnidadesModule {}

