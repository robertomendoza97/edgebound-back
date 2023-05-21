import { Injectable } from '@nestjs/common';
import { ProductDto } from './Dto/product.dto';
import * as products from '../data.json';
import { getProductByIdAndSuggestionsDto } from './Dto/getProductByIdAndSuggestions.dto';

@Injectable()
export class ProductService {
  getAllProducts(): ProductDto[] {
    return products;
  }

  getProductByIdAndSuggestions(name: string): getProductByIdAndSuggestionsDto {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );

    let suggestedProducts = [];

    if (filteredProducts.length > 0) {
      suggestedProducts = products
        .filter(
          (p) =>
            p.category === filteredProducts[0].category &&
            p.name !== filteredProducts[0].name,
        )
        .slice(0, 2);
    }

    return {
      found: filteredProducts,
      suggestions: suggestedProducts,
    };
  }
}
