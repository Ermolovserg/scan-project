import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import { loginValidationSchema } from '../../utils/validation/schema';
import { HOME_URL } from '../../utils/constants';
import { useLoginMutation } from '../../redux/api/scan';
import styles from './login-form.module.scss';

const LoginForm = () => {
  const [
    login,
    {
      isError: isLoginError,
      error: loginError,
      isSuccess: isLoginSuccess,
    },
  ] = useLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || HOME_URL;

  useEffect(() => {
    if (isLoginSuccess) {
      navigate(from);
    }
  }, [isLoginSuccess, navigate, from]);

  const initialValues = process.env.REACT_APP_USE_STUB_DATA === 'true'
    ? {
        login: 'sf_student1',
        password: '4i2385j',
      }
    : {
        login: '',
        password: '',
      };

  const handleOnSubmit = (values, { setSubmitting }) => {
    login(values).then(() => {
      setSubmitting(false);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={styles.form}>
          <TextField label={'Логии или номер телефона:'} id={'login'} name={'login'} />
          <TextField label={'Пароль'} id={'password'} name={'password'} type={'password'} />

          <Button
            color={'accent'}
            size={'big'}
            type={'submit'}
            disabled={!dirty || !isValid || isSubmitting}
          >
            Войти
          </Button>
          <Button href="#">Восстановить пароль</Button>

          {isLoginError && (
            <div className={styles.errorMessage}>{loginError.data.message}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
