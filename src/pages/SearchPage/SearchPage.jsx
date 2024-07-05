import styles from './search-page.module.scss'
import Layout from '../Layout/Layout'
import SearchForm from '../../components/SearchForm/SearchForm'

const SearchPage = () => {
  return (
    <Layout>
      <section className={styles.search}>
        <h2 className={styles.title}>
          Найдите необходимые данные в пару кликов.
        </h2>
        <p className={styles.subtitle}>
          Задайте параметры поиска.<br />Чем больше заполните, тем точнее поиск
        </p>
        <SearchForm className={styles.form} />
      </section>
    </Layout>
  )
}

export default SearchPage
