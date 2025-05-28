import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @IsString()
  @Column()
  password: string;


  @Column({ default: 'cliente' })
  rol: string;

  @Column({ nullable: true })
  direccion: string;
}
