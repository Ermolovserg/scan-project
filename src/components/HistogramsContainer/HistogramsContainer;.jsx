import Spinner from '../LoadingIndicator/LoadingIndicator';
import styles from './histogramsContainer.module.scss';
import '../../scss/_slick-carousel.scss';
import { useGetObjectSearchHistogramsQuery } from '../../redux/api/scan';
import { getObjectSearchRequest } from '../../redux/api/requests';
import HistogramsSlider from '../HistogramsSlider/HistogramsSlider';

const HistogramsContainer = ({ actionData }) => {
  const requestParams = getObjectSearchRequest(actionData);
  const { data, isLoading } = useGetObjectSearchHistogramsQuery(requestParams);

  return (
    <>
      <p className={styles.founded}>
        {data && data.total > 0 ? `Найдено ${isLoading ? <Spinner /> : data.total} вариантов` : 'Нет данных для отображения'}
      </p>

      {data && data.total > 0 && (
        <HistogramsSlider
          isLoading={isLoading}
          slides={data.data}
        />
      )}
    </>
  );
};

export default HistogramsContainer;

