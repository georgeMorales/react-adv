import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres')
                            .required('Requerido'),
            email: Yup.string()
                            .email('Formato invalido de email')
                            .required('Requerido'),
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('firstName')}
                    //name="firstName"
                    //onBlur={handleBlur}
                    //onChange={handleChange}
                    //value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button
                    type="submit"
                >
                    Submit
                </button>
 
            </form>
        </div>
    )
}
