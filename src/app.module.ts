import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 

import { UsuariosModule } from './usuarios/usuarios.module';
import { UnidadesModule } from './unidades/unidades.module';
import { LugaresModule } from './lugares/lugares.module';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { Usuario } from './usuarios/usuario.entity';
import { Unidad } from './unidades/unidad.entity';
import { Lugar } from './lugares/lugar.entity';
import { Mantenimiento } from './mantenimientos/mantenimiento.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'transport_management',
      entities: [Usuario, Unidad, Lugar, Mantenimiento],
      synchronize: true,
    }),
    UsuariosModule,
    UnidadesModule,
    LugaresModule,
    MantenimientosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}




