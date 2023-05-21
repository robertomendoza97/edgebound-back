import { ProductDto } from './product.dto';

export class getProductByIdAndSuggestionsDto {
  found: ProductDto[];
  suggestions: ProductDto[];
}
