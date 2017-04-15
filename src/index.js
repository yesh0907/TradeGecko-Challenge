import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './components/App';
import Detail from './components/Detail';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/detail" component={Detail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
