import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const usuario = await this.authService.validarUsuario(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(usuario);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<Usuario> {
    return this.authService.register(registerDto);
  }
}
