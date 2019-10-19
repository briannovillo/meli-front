import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
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
      <div className={styles.About}>
        <h1>About page</h1>
        <p>Async Text:  {data.text}</p>
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
