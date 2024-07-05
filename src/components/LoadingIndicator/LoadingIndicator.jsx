import styles from './loadingIndicator.module.scss';
import { ReactComponent as LoadingIndicatorSVG } from '../../assets/images/spinner.svg';

const LoadingIndicator = () => {
  return <LoadingIndicatorSVG className={styles.loadingIndicator} />;
};

export default LoadingIndicator;
