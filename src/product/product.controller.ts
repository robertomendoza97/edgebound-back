import { getProductByIdAndSuggestionsDto } from './Dto/getProductByIdAndSuggestions.dto';
import { ProductDto } from './Dto/product.dto';
import { ProductService } from './product.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':name')
  getProductByIdAndSuggestions(
    @Param('name') name: string,
  ): getProductByIdAndSuggestionsDto {
    return this.productService.getProductByIdAndSuggestions(name);
  }

  @Get()
  getAllProducts(): ProductDto[] {
    return this.productService.getAllProducts();
  }
}
