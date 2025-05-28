import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity()
export class PedidoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, pedido => pedido.items)
  pedido: Pedido;

  @ManyToOne(() => Producto)
  producto: Producto;

  @Column()
  cantidad: number;

  @Column('decimal')
  precio: number;
}