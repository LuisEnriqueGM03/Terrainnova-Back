import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  crear(producto: Partial<Producto>): Promise<Producto> {
    const nuevo = this.productosRepository.create(producto);
    return this.productosRepository.save(nuevo);
  }

  findAll(): Promise<Producto[]> {
    return this.productosRepository.find({ relations: ['categoria'] });
  }

  findOne(id: number): Promise<Producto | null> {
    return this.productosRepository.findOne({ where: { id }, relations: ['categoria'] });
  }

  async update(id: number, datos: Partial<Producto>): Promise<Producto | null> {
    await this.productosRepository.update(id, datos);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productosRepository.delete(id);
  }
}
