import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoItem } from './entities/pedido-item.entity';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItem)
    private readonly pedidoItemRepo: Repository<PedidoItem>,
  ) {}

  create(data: Partial<PedidoItem>): Promise<PedidoItem> {
    const item = this.pedidoItemRepo.create(data);
    return this.pedidoItemRepo.save(item);
  }

  findAll(): Promise<PedidoItem[]> {
    return this.pedidoItemRepo.find({ relations: ['producto', 'pedido'] });
  }
}
