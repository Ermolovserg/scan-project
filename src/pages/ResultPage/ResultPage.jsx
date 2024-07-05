import { useActionData } from 'react-router-dom'
import styles from './result-page.module.scss'
import Layout from '../Layout/Layout'
import Histograms from '../../components/HistogramsContainer/HistogramsContainer;'
import ResultList from '../../components/ResultList/ReasultList'

const ResultPage = () => {
  const actionData = useActionData()
  const hasData = Boolean(actionData)

  return (
    <Layout>
      <section className={styles.result}>
        <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
        <p className={styles.subtitle}>Поиск может занять некоторое время,
          просим сохранять терпение.</p>
      </section>

      {hasData && (<section className={styles['result-info']}>
        <h2 className={styles.title}>Общая сводка</h2>
        <Histograms actionData={actionData} />
      </section>)}

      {hasData && (<section className={styles['result-info']}>
        <h2 className={styles.title}>Список документов</h2>
        <ResultList actionData={actionData} />
      </section>)}
    </Layout>
  )
}

export default ResultPage
