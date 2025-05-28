import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
  ) {}

  crear(pedido: Partial<Pedido>): Promise<Pedido> {
    const nuevo = this.pedidoRepo.create(pedido);
    return this.pedidoRepo.save(nuevo);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepo.find({ relations: ['usuario', 'items', 'items.producto'] });
  }

  findByUsuario(usuarioId: number): Promise<Pedido[]> {
    return this.pedidoRepo.find({
      where: { usuario: { id: usuarioId } },
      relations: ['items', 'items.producto'],
    });
  }
}