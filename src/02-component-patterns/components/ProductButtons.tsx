import { useContext, useCallback } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {

    const {counter, increaseBy, maxCount} = useContext(ProductContext)
    console.log('maxCount', maxCount)

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount, //si !!maxCount es false
        [counter, maxCount]
    )
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}> + </button>
        </div> 
    )
}