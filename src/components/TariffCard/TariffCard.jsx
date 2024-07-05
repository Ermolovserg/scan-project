import classNames from 'classnames/bind';
import styles from './tariff-card.module.scss';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';

const cx = classNames.bind(styles);

const TariffCard = ({ card }) => {
  const { title, subtitle, price, oldPrice, creditPrice, description } = card;
  const { user } = useAuth();
  const currentTariff = title === user?.tariff;

  const cardClass = cx({
    card: true,
    [`${title.toLowerCase()}`]: title,
    current: currentTariff,
  });

  return (
    <div className={cardClass}>
      <div className={styles.head}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.price}>
          <p>
            {price} ₽ <del>{oldPrice} ₽</del>
          </p>
          {creditPrice && (
            <p>
              или {creditPrice} ₽/мес. при рассрочке на&nbsp;24&nbsp;мес.
            </p>
          )}
        </div>

        <div className={styles.desc}>
          <p>В тариф входит:</p>
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        <Button
          href={''}
          color={currentTariff ? 'gray' : 'accent'}
          size={'small'}
        >
          {currentTariff ? 'Перейти в личный кабинет' : 'Подробнее'}
        </Button>
      </div>
    </div>
  );
};

export default TariffCard;

