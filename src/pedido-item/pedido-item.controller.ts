import { Controller, Post, Get, Body } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItem } from './entities/pedido-item.entity';

@Controller('pedido-item')
export class PedidoItemController {
  constructor(private readonly pedidoItemService: PedidoItemService) {}

  @Post()
  create(@Body() data: Partial<PedidoItem>) {
    return this.pedidoItemService.create(data);
  }

  @Get()
  findAll() {
    return this.pedidoItemService.findAll();
  }
}
