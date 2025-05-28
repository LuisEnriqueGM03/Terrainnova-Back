import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItem } from './entities/pedido-item.entity';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItem])],
  providers: [PedidoItemService],
  controllers: [PedidoItemController],
  exports: [PedidoItemService],
})
export class PedidoItemModule {}
