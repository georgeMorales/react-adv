import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

export const DynamicForm = () => {
    //console.log(formJson)

    const initialValues: {[key: string]: any} = {}

    const requiredFields: {[key: string]: any} = {}

    for (const input of formJson) {
        // console.log('input', input)
        // console.log('value', input.value)
        initialValues[input.name] = input.value

        if (!input.validations) continue

        let schema = Yup.string()

        for (const rule of input.validations) {
            if (rule.type === 'required') {
                schema = schema.required('Este campo es requerido')
            }
            if (rule.type === 'minLength') {
                schema = schema.min((rule as any).value || 2, `Mínimo ${(rule as any).value || 2} caracteres`)
            }
            if (rule.type === 'email') {
                schema = schema.email('Email no válido')
            }

            // ...otras reglas
            
        }

        requiredFields[input.name] = schema

        //console.log('initialValues', initialValues)

    }

    const validationsSchema = Yup.object({...requiredFields})

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationsSchema}
            >

                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map(({type, name, placeholder, label, options}) => {
                                    if (type === 'input' || type === 'email' || type === 'password') {
                                        return <MyTextInput key={name} label={label} name={name} type={type as any} />
                                    }
                                    else if (type === 'select') {
                                        return (
                                            <MySelect key={name} label={label} name={name}>
                                                <option value="">Select an option</option>
                                                {
                                                    options?.map(({id, label}) => (
                                                        <option key={id} value={id}>{label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }

                                    throw new Error(`El type ${type} no es soportado`)
                                    
                                })
                            }
                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
