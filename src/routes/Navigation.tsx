import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { 
    RegisterPage, 
    FormikYupPage, 
    FormikBasicPage, 
    FormikComponents, 
    FormikAbstractions, 
    RegisterFormikPage,
    DynamicForm
} from '../03-forms/pages/';


export const Navigation = () => {
    return (
        <BrowserRouter>
        
            <div className="main-layout">
                <nav>
                   <img src={logo} alt="logo" /> 

                    <ul>
                        <li>
                            <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : '' }>Register-page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : '' }>Register-page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active' : '' }>Formik-Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active' : '' }>Formik-Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractions" className={({isActive}) => isActive ? 'nav-active' : '' }>Formik-Abstractions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active' : '' }>Formik-Basic</NavLink>
                        </li>

                        <li>
                            <NavLink to="/formik-register" className={({isActive}) => isActive ? 'nav-active' : '' }>Formik-Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={({isActive}) => isActive ? 'nav-active' : '' }>Dynamic-Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstractions" element={<FormikAbstractions />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-register" element={<RegisterFormikPage />} />
                    <Route path="dynamic-form" element={<DynamicForm />} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="/*" element={<Navigate to="/formik-abstractions" replace />} />
                </Routes>

            </div>

        </BrowserRouter>
       
    )
}
