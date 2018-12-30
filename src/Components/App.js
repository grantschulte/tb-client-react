import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageNav from './PageNav/PageNav';
import routes from '../config/routes.config';
import './App.css';

class App extends Component {  
  render() {
    return (
      <Router>
        <div className='siteWrapper'>
          <div className='pageWrapper'>
            <Header></Header>

            <div className='bodyWrapper'>
              <div className='contentWrapper'>
                <PageNav></PageNav>

                {routes.map((route, i) => (
                  <Route
                  key={`app-route-${i}`}
                  exact={route.exact}
                  path={route.path}
                  component={route.components.main} />
                ))}
              </div>
            </div>

            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
