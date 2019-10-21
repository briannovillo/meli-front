import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBox from '../searchBox/SearchBox';
import styles from './ProductDetail.scss';

export default class ProductDetail extends Component {

  UNSAFE_componentWillMount() {
    console.log(this.props);

    if (!this.props.product) {
      this.props.productGetFetch(this.props.match.params.id);
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return 'Loading async data...';

    console.log(product);

    return (
      <div className={styles.ProductDetail}>
        <SearchBox />
        <h1>ProductDetail page</h1>
        <p>Async Text: {product.title}</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string
  }),
  productGetFetch: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
  product: null
};
