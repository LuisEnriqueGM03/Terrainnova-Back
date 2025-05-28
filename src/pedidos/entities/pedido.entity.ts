import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { PedidoItem } from '../../pedido-item/entities/pedido-item.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario)
  usuario: Usuario;

  @Column('decimal')
  total: number;

  @Column({ default: 'pendiente' })
  estado: string;

  @CreateDateColumn()
  fecha: Date;

  @OneToMany(() => PedidoItem, item => item.pedido, { cascade: true })
  items: PedidoItem[];
}