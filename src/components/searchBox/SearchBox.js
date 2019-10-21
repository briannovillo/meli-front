import React, { Component } from 'react';
import SearchButton from './SearchButton';
import styles from './SearchBox.scss';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    window.location = `/items?search=${value}`;
  }

  render() {
    const { value } = this.state;
    return (
      <header role="banner" className={styles['nav-header']}>
        <form onSubmit={this.handleSubmit} className={styles['nav-menu']}>
          <a href="/" className={styles['nav-logo']}>
            Mercado Libre Argentina - Donde comprar y vender de todo
          </a>
          <input
            value={value}
            onChange={this.handleChange}
            type="text"
            name="query"
            className={styles['nav-search-input']}
            placeholder="Nunca dejes de buscar"
          />
          <SearchButton />
        </form>
      </header>
    );
  }
}
