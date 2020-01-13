import React from 'react';

import './Registration.scss';
import { Field, Form, Formik } from 'formik';

interface RegFormInitialValue {
    login: string;
    password: string;
    confirmPassword: string;
    email: string;
}


const Registration: React.FC = () => {

    const regFormInitValue: RegFormInitialValue = {
        login: '',
        password: '',
        confirmPassword: '',
        email: '',
    };

    const makeRegistration = (values: object) => {
        console.log('make registration ', values);
    };

    return (
        <div className='reg-container'>
            <div className='reg-form'>
                REGISTRATION:
                <Formik
                    initialValues={regFormInitValue}
                    onSubmit={(values, actions) => {
                        makeRegistration(values);
                        actions.setSubmitting(false);
                    }}
                    render={({ formickBug, onSubmit }: any) => (
                        <Form>
                            <Field
                                name='login'
                                render={({ field, form, meta }: any) => (
                                    <div>
                                        <input
                                            className='reg-form-element'
                                            type='text'
                                            {...field}
                                            placeholder='Login'
                                        />
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )}
                            />
                            <Field
                                name='email'
                                render={({ field, form, meta }: any) => (
                                    <div>
                                        <input
                                            className='reg-form-element'
                                            type='text'
                                            {...field}
                                            placeholder='Email'
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
                                            className='reg-form-element'
                                            type='password'
                                            {...field}
                                            placeholder='Password '
                                        />
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )}
                            />
                            <Field
                                name='confirmPassword'
                                render={({ field, form, meta }: any) => (
                                    <div>
                                        <input
                                            className='reg-form-element'
                                            type='password'
                                            {...field}
                                            placeholder='Confirm password'
                                        />
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )}
                            />
                            <button type='submit' className={'reg-form-element'} onClick={onSubmit}>
                                Register
                            </button>
                        </Form>
                    )}
                />
            </div>
        </div>
    );
};
export default Registration;
