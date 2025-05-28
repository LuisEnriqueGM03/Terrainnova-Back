import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, password: string): Promise<Usuario> {
    const usuario = await this.usuariosService.buscarPorEmail(email);
    if (usuario && await bcrypt.compare(password, usuario.password)) {
      return usuario;
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }

  async login(usuario: Usuario) {
    const payload = { email: usuario.email, sub: usuario.id, rol: usuario.rol };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(datos: Partial<Usuario>): Promise<Usuario> {
    const hash = await bcrypt.hash(datos.password, 10);
    const nuevoUsuario = await this.usuariosService.crear({
      ...datos,
      password: hash,
    });
    return nuevoUsuario;
  }
}

