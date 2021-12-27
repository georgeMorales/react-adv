import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {
   
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        //console.log('onProductCountChange', e)
        console.log('count', count)
        setShoppingCart(oldShoppingCart => { 
            
            if (count === 0) {
                //console.log('primer IF')
                const {[product.id]: toDelete, ...rest} = oldShoppingCart
                //console.log('toDelete', toDelete)
                //console.log('rest', rest)
                return rest
                //return {...rest} // esta forma tb vale
            }
            else {
                //console.log('segundo...')
                return {
                    ...oldShoppingCart,
                    [product.id]: {...product, count}      
                }
            }
            
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
