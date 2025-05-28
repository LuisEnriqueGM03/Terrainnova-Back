import { Test, TestingModule } from '@nestjs/testing';
import { PedidoItemController } from './pedido-item.controller';

describe('PedidoItemController', () => {
  let controller: PedidoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoItemController],
    }).compile();

    controller = module.get<PedidoItemController>(PedidoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
