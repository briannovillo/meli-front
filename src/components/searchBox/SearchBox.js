import React, { Component } from 'react';
import styles from './SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <header role="banner" className={styles['nav-header']}>
        <div className={styles['nav-menu']}>
          <a href="/" className={styles['nav-logo']}>
            Mercado Libre Argentina - Donde comprar y vender de todo
          </a>
          <input className={styles['nav-search-input']} placeholder="Nunca dejes de buscar" />
        </div>
      </header>
    );
  }
}
