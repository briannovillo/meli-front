import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
import SearchBox from '../searchBox';
import BreadCrumb from '../../containers/BreadCrumb';
import ProductsList from '../productsList';
import styles from './SearchResults.scss';

export default class SearchResults extends Component {

  UNSAFE_componentWillMount() {
    if (!this.props.products) {
      const query = queryString.parse(this.props.location.search);
      this.props.productSearchFetch(query.search);
    }
  }

  render() {
    const { products } = this.props;

    return (
      <div className={styles.SearchResults}>
        <SearchBox />
        <main role="main" className={styles.main}>
          <BreadCrumb />
          <ProductsList products={products} />
        </main>
      </div>
    );
  }
}

SearchResults.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ),
  productSearchFetch: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  products: null
};
