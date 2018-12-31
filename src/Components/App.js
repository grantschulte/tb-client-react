import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import ContentContainer from './ContentContainer/ContentContainer';
import NotFoundPage from './NotFoundPage/NotFoundPage';
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
              <ContentContainer className='mh2'>
                <PageNav></PageNav>

                <Switch>
                  {routes.map((route, i) => (
                    <Route
                    key={`app-route-${i}`}
                    exact={route.exact}
                    path={route.path}
                    component={route.components.main} />
                  ))}
                  <Route component={ NotFoundPage } />
                </Switch>
              </ContentContainer>
            </div>

            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
