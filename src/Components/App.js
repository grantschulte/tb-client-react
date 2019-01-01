import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import routes from '../config/routes.config';
import './App.css';

class App extends Component {  
  render() {
    return (
      <Router>
        <div className='siteWrapper'>
          <Header></Header>

          <div className='pageWrapper'>
            <Switch>
              {routes.map((route, i) => (
                <Route
                key={`app-route-${i}`}
                exact={route.exact}
                path={route.path}
                component={route.components.main} />
              ))}
              <Route component={NotFoundPage} />
            </Switch>
          </div>

          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
