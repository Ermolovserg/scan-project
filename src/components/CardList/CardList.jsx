import React from 'react';
import PropTypes from 'prop-types';
import styles from './card-list.module.scss';

const CardList = ({ cardList, cardComponent: CardComponent }) => {
  return (
    <div className={styles.list}>
      {cardList.map((card) => (
        <CardComponent card={card} key={card.id || card.title} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    })
  ).isRequired,
  cardComponent: PropTypes.elementType.isRequired,
};

export default CardList;
