import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../sass/Home.module.scss';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
