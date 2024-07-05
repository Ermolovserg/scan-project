import styles from './informer.module.scss'
import Spinner from '../LoadingIndicator/LoadingIndicator'
import { useGetAccountInfoQuery } from '../../redux/api/scan'

const Informer = () => {
  const { data: limits, isFetching } = useGetAccountInfoQuery()

  return (
    <div className={styles.informer}>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <p className={styles.text}>Использовано компаний<span
            className={styles.num}>{limits?.usedCompanyCount}</span></p>
          <p className={styles.text}>Лимит по компаниям<span
            className={styles['num-color']}>{limits?.companyLimit}</span></p>
        </>
      )}
    </div>
  )
}

export default Informer
