import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './containers/App';
import Detail from './containers/Detail';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/detail/:repo" render={() => (
          Object.keys(store.getState().detail.repo).length === 0 ?
          <Redirect to="/" /> : <Detail /> )}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
