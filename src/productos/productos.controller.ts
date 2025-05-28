import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProductosService } from './productos.service';
import { Producto } from './entities/producto.entity';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(@Body() producto: Partial<Producto>) {
    return this.productosService.crear(producto);
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() producto: Partial<Producto>) {
    return this.productosService.update(+id, producto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/productos',
        filename: (req, file, callback) => {
          const idSuffix = req.params.id;
          const filename = `${idSuffix}.jpg`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(
    @Param('id') id: number,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const filePath = `/uploads/productos/${image.filename}`;
    return {
      message: 'Imagen subida correctamente',
      filePath: filePath,
    };
  }
}
