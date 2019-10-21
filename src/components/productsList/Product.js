import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.scss';

const currencySymbols = new Map([
  ['ARS', '$'],
  ['USD', 'U$S']
]);

export default class Product extends Component {
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
        <Link to={detailLink}>
          <img src={picture} alt={title} />
        </Link>
        <Link to={detailLink}>
          <span className={styles.symbol}>
            { currencySymbols.get(price.currency) }
          </span>
          <span className={styles.fraction}>
            { price.amount }
          </span>
        </Link>
        <Link to={detailLink}>
          <h2 className={styles.title}>
            {title}
          </h2>
        </Link>
        <p>{description}</p>
      </li>
    );
  }
}

Product.propTypes = {
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

Product.defaultProps = {
  description: '',
  picture: ''
};
