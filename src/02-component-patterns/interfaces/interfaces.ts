import { ReactElement } from 'react';

export interface ProductCardProps {
    product: Product,
    children: ReactElement | ReactElement[]
}

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
    Title: ({ title }: { title?: string | undefined }) => JSX.Element,
    Image: ({ img }: { img?: string | undefined }) => JSX.Element,
    Buttons: () => JSX.Element
}