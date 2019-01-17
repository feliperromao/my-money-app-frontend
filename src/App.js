import './commons/template/dependencies'
import React, { Component } from 'react';

import Header from './commons/template/Header'
import Sidebar from './commons/template/Sidebar'
import Footer from './commons/template/Footer';

import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
