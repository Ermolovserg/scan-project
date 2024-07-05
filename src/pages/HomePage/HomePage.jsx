import { useNavigate } from 'react-router-dom'
import styles from './home-page.module.scss'
import Layout from '../Layout/Layout'
import Button from '../../components/Button/Button'
import Slider from '../../components/Slider/SLider'
import { featuresSliderSettings } from '../../components/Slider/settings'
import SlideFeature from '../../components/SlideFeature/SlideFeature'
import { FEATURES, TARIFFS } from '../../utils/placeholders'
import CardList from '../../components/CardList/CardList'
import TariffCard from '../../components/TariffCard/TariffCard'
import { useAuth } from '../../hooks/useAuth'
import { SEARCH_URL } from '../../utils/constants'

const HomePage = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Сервис по&nbsp;поиску публикаций о&nbsp;компании по&nbsp;его&nbsp;ИНН
        </h1>
        <p className={styles.subtitle}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        <Button disabled={!isLoggedIn}
                color={'accent'} size={'big'}
                onClick={() => navigate(SEARCH_URL)}
        >
          Запросить данные
        </Button>
      </section>

      <section className={styles.features}>
        <h2 className={styles.title}>Почему именно мы</h2>
        <Slider className={styles.slider} slideComponent={SlideFeature}
                slides={FEATURES} settings={featuresSliderSettings} />
      </section>

      <section className={styles.tariffs}>
        <h2 className={styles.title}>Наши тарифы</h2>
        <CardList cardComponent={TariffCard} cardList={TARIFFS} />
      </section>
    </Layout>
  )
}

export default HomePage
