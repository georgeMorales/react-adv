import {useState, useEffect, useRef} from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
}


export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {

        //console.log('isControlled', isControlled.current)

        if (isControlled.current) {
            return onChange!({count: value, product}) //onChange! signo que le dice a ts que confie en que venga esa funcion que es opcional
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        
        onChange && onChange({count: newValue, product})
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    // const decreaseBy = () => {
    //     if (counter <= 0) return
    //     setCounter(prev => prev - 1)
    // }

    return {
        counter,
        increaseBy
    }
}