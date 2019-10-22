import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBox from '../searchBox/SearchBox';
import styles from './ProductDetail.scss';

const currencySymbols = new Map([
  ['ARS', '$'],
  ['USD', 'U$S']
]);

export default class ProductDetail extends Component {
  render() {
    const { 
      product: {
        description,
        title,
        condition,
        picture,
        sold_quantity: soldQuantity,
        price
      }
    } = this.props;

    return (
      <React.Fragment>
        <SearchBox />
        <div className={styles.ProductDetail}>
          <div className={styles.overlay}>
            <div className={styles.left}>
              <img src={picture} alt={title} />
              <h2>Descripción del producto</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.right}>
              { condition === 'new' ? <span className={styles.condition}>Nuevo</span> : <span className={styles.condition}>Usado</span> }
              { soldQuantity ? <span className={styles.sold}>{` - ${soldQuantity} vendidos`}</span> : '' }
              <h1>{title}</h1>
              <span className={styles.currency}>{ currencySymbols.get(price.currency) }</span>
              <span className={styles.amount}>{ price.amount.toFixed(2) }</span>
              <button className={styles.buy} type="button">Comprar</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number
    }).isRequired,
    picture: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    description: PropTypes.string
  })
};

ProductDetail.defaultProps = {
  product: null
};
