import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
import SearchBox from '../searchBox';
import BreadCrumb from '../breadcrumb';
import ProductsList from '../productsList';
import styles from './SearchResults.scss';

export default class SearchResults extends Component {
  componentDidMount() {
    // only fetch the data if there is no data
    if (!this.props.data) this.props.getData();
  }

  render() {
    console.log(queryString.parse(this.props.location.search));
    const { data } = this.props;
    if (!data) return 'Loading async data...';

    return (
      <div className={styles.SearchResults}>
        <SearchBox />
        <main role="main" className={styles.main}>
          <BreadCrumb paths={['Algo', 'Otra cosa', 'La ultima']} />
          <ProductsList products={
            [
              {
                id: 'MLA812667656',
                title: 'Ford Focus Iii 1.6 S 2017 Rpm Moviles',
                price: {
                  currency: 'ARS',
                  amount: 580000,
                  decimals: 0
                },
                picture: 'http://mla-s1-p.mlstatic.com/676653-MLA32057302445_092019-I.jpg',
                condition: 'used',
                free_shipping: false
              },
              {
                id: 'MLA819095589',
                title: 'Ford Focus 1.6 Trend Exe Plus Manual 4p 2010 Rpm Moviles',
                price: {
                  currency: 'ARS',
                  amount: 319000,
                  decimals: 0
                },
                picture: 'http://mla-s2-p.mlstatic.com/975700-MLA32242010722_092019-I.jpg',
                condition: 'used',
                free_shipping: true
              }
            ]
          }
          />
        </main>
      </div>
    );
  }
}

SearchResults.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  data: null
};
