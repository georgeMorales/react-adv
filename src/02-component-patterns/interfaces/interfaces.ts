
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage'
import { Props as ProductButtonsProps} from '../components/ProductButtons'


export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    product: Product,
    counter: number,
    increaseBy: (value: number) => void
}

//Esta interface es opcional
export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: (Porps: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}