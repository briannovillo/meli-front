import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
import SearchBox from '../searchBox';
import BreadCrumb from '../breadcrumb';
import ProductsList from '../productsList';
import styles from './SearchResults.scss';

export default class SearchResults extends Component {

  UNSAFE_componentWillMount() {
    if (!this.props.products) {
      this.props.productSearchFetch(queryString.parse(this.props.location.search).search);
    }
  }

  render() {
    const { products } = this.props;
    console.log(this.props);
    if (!products) return 'Loading async data...';

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
