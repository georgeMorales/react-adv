import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initState: T) => {
    
    const [formData, setFormData] = useState(initState)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value)

        const {value, name} = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        //console.log('formData', formData)
    }

    const resetForm = () => {
        setFormData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        isValidEmail
    }
}
