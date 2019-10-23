import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductsListItem from './ProductsListItem';
import styles from './ProductsList.scss';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul className={styles.ProductsList}>
        {
          products.map(
            product => <ProductsListItem key={product.id} {...product} />
          )
        }
      </ul>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};
