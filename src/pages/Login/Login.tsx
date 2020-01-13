import React from 'react';
import './Login.scss';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

interface LoginForm {
    login: string;
    password: string;
}

const Login: React.FC = () => {
    const initialValLoginForm: LoginForm = {
        login: '',
        password: '',
    };

    const makeLogin = async (values: object) => {
        console.log('Make login is called', values);
    };

    return (
        <div className={'login-container'}>
            <div className={'login-form'}>
                LOGIN:
                <Formik
                    initialValues={initialValLoginForm}
                    onSubmit={(values, actions) => {
                        makeLogin(values);
                        actions.setSubmitting(false);
                    }}
                    render={({ formickBug, onSubmit }: any) => (
                        <Form>
                            <Field
                                name='login'
                                render={({ field, form, meta }: any) => (
                                    <div>
                                        <input
                                            className='login-form-element'
                                            type='text'
                                            {...field}
                                            placeholder='Login'
                                        />
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )}
                            />
                            <Field
                                name='password'
                                render={({ field, form, meta }: any) => (
                                    <div>
                                        <input
                                            className='login-form-element'
                                            type='password'
                                            {...field}
                                            placeholder='Password '
                                        />
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )}
                            />
                            <button type='submit' className={'login-form-element'} onClick={onSubmit}>
                                Login
                            </button>
                        </Form>
                    )}
                />
                <Link className='login-link' to={'/reg'}> Register account </Link>
            </div>
        </div>
    );
};
export default Login;
