import { ProductCard as ProductCarHOC} from './ProductCard'
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';

//export { ProductCard } from './ProductCard';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCarHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


