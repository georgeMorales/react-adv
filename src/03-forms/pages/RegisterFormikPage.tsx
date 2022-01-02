import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyTextInput } from '../components'

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div className='container'>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .min(2, 'Debe de tener mínimo 2 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Formato invalido de email')
                                    .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Debe de tener mínimo 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    .required('Requerido')
                                    .oneOf([Yup.ref('password1'), null], 'Passwords debe de coincidir')
                })}
            >
                {
                    ({handleReset}) => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="Jorge"
                            />
                            
                            <MyTextInput 
                                label="Email" 
                                name="email" 
                                placeholder="test@test.com"
                                type="email"
                            />  

                            <MyTextInput 
                                label="Password" 
                                name="password1" 
                                type="password"
                            />  

                            <MyTextInput 
                                label="Repite Password" 
                                name="password2" 
                                type="password"
                            />  


                            <button
                                type="submit"
                            >
                                Submit
                            </button>

                            <button
                                type="button"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
            
                        </Form>
                    )
                }

            </Formik>

            
        </div>
    )
}
