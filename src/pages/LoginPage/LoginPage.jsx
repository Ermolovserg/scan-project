import Layout from '../Layout/Layout'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginMap from '../../components/LoginMap/LoginMap'
import styles from './login-page.module.scss'

const LoginPage = () => {
  return (
    <Layout>
      <section className={styles.login}>
        <h2 className={styles.title}>Для оформления подписки на тариф,
          необходимо авторизоваться.</h2>
        <LoginMap>
          <LoginForm />
        </LoginMap>
      </section>
    </Layout>
  )
}

export default LoginPage
