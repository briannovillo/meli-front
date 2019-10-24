import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ProductsListItem.scss';

const currencySymbols = new Map([
  ['ARS', '$'],
  ['USD', 'U$S']
]);

export default class ProductsListItem extends Component {
  render() {
    const {
      id,
      price,
      title,
      picture,
      free_shipping: freeShipping
    } = this.props;

    const detailLink = `/items/${id}`;

    return (
      <li className={styles.product}>
        <div className={styles.image}>
          <a href={detailLink}>
            <img src={picture} alt={title} />
          </a>
        </div>
        <div className={styles.info}>
          <a className={styles.price} href={detailLink}>
            <span className={styles.currency}>
              { currencySymbols.get(price.currency) }
            </span>
            <span className={styles.amount}>
              { price.amount }
            </span>
            { price.decimals ? <span className={styles.decimals}>{ price.decimals }</span> : null }
          </a>
          <h2 className={styles.title}>
            <a href={detailLink}>
              {title}
            </a>
          </h2>
          { freeShipping ? <span className={styles.free}>Envío gratis</span> : '' }
        </div>
      </li>
    );
  }
}

ProductsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape(
    {
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number
    }
  ).isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
  free_shipping: PropTypes.bool.isRequired
};

ProductsListItem.defaultProps = {
  picture: ''
};
