import { Controller, Post,Put, Get, Param, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from './entities/pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  crear(@Body() pedido: Partial<Pedido>) {
    return this.pedidosService.crear(pedido);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get('usuario/:id')
  findByUsuario(@Param('id') id: string) {
    return this.pedidosService.findByUsuario(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Pedido>) {
    return this.pedidosService.update(+id, data);
  }
}
