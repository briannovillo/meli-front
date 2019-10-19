import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBox from '../searchBox/SearchBox';
import styles from './ProductDetail.scss';

export default class ProductDetail extends Component {
  componentDidMount() {
    // only fetch the data if there is no data
    if (!this.props.data) this.props.getData();
  }

  render() {
    console.log(this.props.match.params.id);
    
    const { data } = this.props;
    if (!data) return 'Loading async data...';

    return (
      <div className={styles.About}>
        <SearchBox />
        <h1>ProductDetail page</h1>
        <p>Async Text:  {data.text}</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
  data: null
};
