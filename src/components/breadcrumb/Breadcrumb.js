import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Breadcrumb.scss';

export default class Breadcrumb extends Component {
  render() {
    const { paths } = this.props;
    return (
      <ul className={styles.Breadcrumb}>
        { paths.map(path => <li key={path} className={styles.Breadcrumb.li}>{path}</li>) }
      </ul>
    );
  }
}

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};
