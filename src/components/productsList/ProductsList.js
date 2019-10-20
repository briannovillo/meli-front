import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Product from './Product';
import styles from './ProductsList.scss';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ol className={styles.ProductsList}>
        {
          products.map(
            product => <Product key={product.id} {...product} />
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
