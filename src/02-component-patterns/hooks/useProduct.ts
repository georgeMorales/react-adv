import {useState} from 'react'


export const useProduct = () => {

    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }

    // const decreaseBy = () => {
    //     if (counter <= 0) return
    //     setCounter(prev => prev - 1)
    // }

    return {
        counter,
        increaseBy
    }
}