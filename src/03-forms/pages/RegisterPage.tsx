import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {
        formData, 
        onChange, 
        resetForm, 
        name, 
        email, 
        password1, 
        password2,
        isValidEmail
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event)
        console.log(formData)
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es válido</span>}
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>Password 6 caracteres</span>}

                <input 
                    type="password" 
                    placeholder="Repeat password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Tiene que ser iguales</span>}

                <button
                    type="submit"
                >
                    Create
                </button>

                <button
                    type="button"
                    onClick={resetForm}
                >
                    Reset
                </button>
            </form>
            
        </div>
    )
}
