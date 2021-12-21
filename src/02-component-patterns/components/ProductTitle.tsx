import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


export const ProductTitle = ({title}: {title?: string}) => { //si se inicializa img = '' hace que la img sea opcional no hace falta {img = ''}: {img: string}
    
    const {product} = useContext(ProductContext)
    
    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}
