import { Test, TestingModule } from '@nestjs/testing';
import { PedidoItemService } from './pedido-item.service';

describe('PedidoItemService', () => {
  let service: PedidoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoItemService],
    }).compile();

    service = module.get<PedidoItemService>(PedidoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
