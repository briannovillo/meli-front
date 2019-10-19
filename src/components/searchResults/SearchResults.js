import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
import SearchBox from '../searchBox/SearchBox';
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
          <ol>

          </ol>
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
