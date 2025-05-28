import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crear(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.crear(usuario);
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string): Promise<Usuario | null> {
    return this.usuariosService.buscarPorId(+id);
  }
}
