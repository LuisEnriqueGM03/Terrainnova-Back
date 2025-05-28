// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { diskStorage } from 'multer';

// Módulos del proyecto
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PedidoItemModule } from './pedido-item/pedido-item.module';

// Entidades
import { Usuario } from './usuarios/entities/usuario.entity';
import { Producto } from './productos/entities/producto.entity';
import { Categoria } from './categorias/entities/categoria.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { PedidoItem } from './pedido-item/entities/pedido-item.entity';

@Module({
  imports: [
    // Carga de archivos para imágenes
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const ext = file.originalname.split('.').pop();
          const name = Date.now();
          callback(null, `${name}.${ext}`);
        },
      }),
    }),

    // Servir archivos estáticos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),

    // Conexión a PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'terrainnova',
      entities: [Usuario, Producto, Categoria, Pedido, PedidoItem],
      synchronize: true,
    }),

    // Módulos de funcionalidad
    AuthModule,
    UsuariosModule,
    CategoriasModule,
    ProductosModule,
    PedidosModule,
    PedidoItemModule,
  ],
})
export class AppModule {}
