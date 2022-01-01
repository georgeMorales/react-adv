import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstractions = () => {

    return (
        <div className='container'>
            <h1>Formik Abstractions</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Formato invalido de email')
                                    .required('Requerido'),
                    terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-jr'], "Esta opción no es permitida")
                                    .required('Requerido')
                })}
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="Jorge"
                            />
                            
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Morales"
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email" 
                                placeholder="test@test.com"
                                type="email"
                            />  

                            <MySelect
                                label="Job Type"
                                name="jobType"
                            >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Design</option>
                                <option value="it-senior">IT-Senior</option>
                                <option value="it-jr">IT-Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms" name="terms" />

                            <button
                                type="submit"
                            >
                                Submit
                            </button>
            
                        </Form>
                    )
                }

            </Formik>

            
        </div>
    )
}
