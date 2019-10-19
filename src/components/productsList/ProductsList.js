import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ProductsList.scss';

const currencySymbols = [
  ['ARS', '$'],
  ['USD', 'U$S']
];

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <ol className={styles.ProductsList}>
        {
          products.map(
            product => (
              <li className={styles.ProductsList.product}>
                <span className={styles.ProductsList.product.price.currency.symbol}>
                  { currencySymbols.get(product.price.currency) }
                </span>
                <span className={styles.ProductsList.product.price.currency.fraction}>
                  { currencySymbols.get(product.price.amount) }
                </span>
              </li>
            )
          )
        }
      </ol>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};
