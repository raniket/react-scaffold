import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from './utils/ErrorBoundary';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Sample from './components/Sample';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className=" container container-custom-css">
            <ErrorBoundary>
              <Switch>
                <Route exact path="/sample" component={Sample} />
              </Switch>
            </ErrorBoundary>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
