import {useState, useEffect, useRef} from 'react'
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}


export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    const isMounted = useRef(false)

    //console.log('initialValues', initialValues)

    const increaseBy = (value: number) => {

        //const newValue = Math.max(counter + value, 0)
        
        const newValue = Math.max(counter + value, 0)
       
        if (initialValues?.maxCount && newValue > initialValues?.maxCount) return
        setCounter(newValue)
        
        onChange && onChange({count: newValue, product})
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
    
    useEffect(() => {
        if (!isMounted.current) return
        
        setCounter(value)
    }, [value])
    
    useEffect(() => {
        isMounted.current = true
    }, [])

    // const decreaseBy = () => {
    //     if (counter <= 0) return
    //     setCounter(prev => prev - 1)
    // }

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset

    }
}