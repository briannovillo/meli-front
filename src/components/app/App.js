import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.App}>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
