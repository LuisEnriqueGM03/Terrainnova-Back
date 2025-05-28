import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  crear(nombre: string): Promise<Categoria> {
    const categoria = this.categoriasRepository.create({ nombre });
    return this.categoriasRepository.save(categoria);
  }

  findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.find();
  }

  findOne(id: number): Promise<Categoria | null> {
    return this.categoriasRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.categoriasRepository.delete(id);
  }
}
