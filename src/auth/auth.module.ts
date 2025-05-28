import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuariosModule,
    JwtModule.register({
      secret: 'secreto',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
