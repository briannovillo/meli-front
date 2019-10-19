import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <header role="banner" className={styles['nav-header']}>
        <div className={styles['nav-menu']}>
          <Link className={styles['nav-logo']} to="/">
            Mercado Libre Argentina - Donde comprar y vender de todo
          </Link>
          <input className={styles['nav-search-input']} placeholder="Nunca dejes de buscar" />
        </div>
      </header>
    );
  }
}
