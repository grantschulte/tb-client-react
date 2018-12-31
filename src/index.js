import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'normalize.css/normalize.css';
import 'tachyons/css/tachyons.css';
import './ui/dist/semantic.css';
import './global.css';

import store from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);