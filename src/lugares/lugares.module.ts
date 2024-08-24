import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { Lugar } from './lugar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lugar])],
  providers: [LugaresService],
  controllers: [LugaresController],
})
export class LugaresModule {}
