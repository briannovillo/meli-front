import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ProductsListItem.scss';

const currencySymbols = new Map([
  ['ARS', '$'],
  ['USD', 'U$S']
]);

export default class ProductsListItem extends Component {
  render() {
    const {
      id,
      price,
      title,
      description,
      picture
    } = this.props;

    const detailLink = `/items/${id}`;

    return (
      <li className={styles.product}>
        <a href={detailLink}>
          <img src={picture} alt={title} />
        </a>
        <a href={detailLink}>
          <span className={styles.symbol}>
            { currencySymbols.get(price.currency) }
          </span>
          <span className={styles.fraction}>
            { price.amount }
          </span>
        </a>
        <a href={detailLink}>
          <h2 className={styles.title}>
            {title}
          </h2>
        </a>
        <p>{description}</p>
      </li>
    );
  }
}

ProductsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape(
    {
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number
    }
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  picture: PropTypes.string
};

ProductsListItem.defaultProps = {
  description: '',
  picture: ''
};
