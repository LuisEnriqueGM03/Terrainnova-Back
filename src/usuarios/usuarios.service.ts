import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async crear(usuario: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuariosRepository.create(usuario);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.usuariosRepository.findOne({ where: { email } });
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    return this.usuariosRepository.findOne({ where: { id } });
  }
}
