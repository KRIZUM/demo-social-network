import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import s from "./login.module.css";
import {getAuthLogin} from "../../redux/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';


const validateLoginForm = values => {
    const errors = {};
    if (!values.email){
        errors.email = 'Введите email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ){
        errors.email = 'Введите верный email';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
    password: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(10,"Must be shorter than 10 characters")
        .required("Required 2 ")
})


const Login = (props) => {
    if (props.isAuth) return <Navigate to='/profile'/>
    return (
        <div>
            <h2> Login  </h2>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                onSubmit={(values, actions) => {
                    actions.setStatus(undefined)
                    props.getAuthLogin(values.email, values.password, values.rememberMe, actions);

                }}
            >
                {(formik) => (
                    <Form>
                        <div className={s.error}>{formik.status}</div>
                        <div>
                            <Field className={s.login}
                                name={'email'}
                                type={'text'}
                                placeholder={'e-mail'}/>

                        </div>
                        <ErrorMessage name="email" component="div"/>

                        <div className={s.error}>
                            <Field className={s.login}
                                name={'password'}
                                type={'password'}
                                placeholder={'password'}/>
                        </div>
                        <ErrorMessage name="password" component="div"/>
                        <div>
                            <Field
                                name={'rememberMe'}
                                type={'checkbox'}
                                id='rememberMe'/>
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>
                        <div className={s.button}>
                        <button disabled={!formik.isValid} type='submit'>Login</button>
                        </div>
                        </Form>
                )}
            </Formik>

            <div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getAuthLogin, })
)(Login)