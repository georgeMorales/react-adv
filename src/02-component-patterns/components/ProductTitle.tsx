import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    title?: string, 
    className?: string,
    style?: React.CSSProperties
}

export const ProductTitle = ({title, className, style}: Props) => { //si se inicializa img = '' hace que la img sea opcional no hace falta {img = ''}: {img: string}
    
    const {product} = useContext(ProductContext)
    
    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    )
}
