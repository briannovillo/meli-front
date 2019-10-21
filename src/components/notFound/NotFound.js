import React, { Component } from 'react';
import SearchBox from '../searchBox';
import styles from './NotFound.scss';
import NotFoundIcon from './NotFoundIcon';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.NotFound}>
        <SearchBox />
        <main role="main" className={styles.main}>
          <NotFoundIcon />
          <h4>Parece que esta página no existe</h4>
          <a href="/">Ir a la página principal</a>
        </main>
      </div>
    );
  }
}
