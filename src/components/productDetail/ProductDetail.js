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
      <div className={styles.ProductDetail}>
        <SearchBox />
        <img src={picture} alt={title} />
        <h2>Descripción del producto</h2>
        <p>{description}</p>
        <h1>{title}</h1>
        <span>{condition}</span>
        { soldQuantity ? <span>{`${soldQuantity} vendidos`}</span> : '' }
        <span>{ currencySymbols.get(price.currency) }</span>
        <span>{ price.amount }</span>
        <button type="button">Comprar</button>
      </div>
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
