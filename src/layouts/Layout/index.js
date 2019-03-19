import Header from '../Header/index';
import Footer from '../Footer/index';
import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
