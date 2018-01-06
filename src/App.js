import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Provider as Rebass} from 'rebass';
import {routerMiddleware} from 'react-router-redux';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';

import ApiClient from 'shared/apiClient';
import DevTools from 'components/devTools';
import clientMiddleware from 'shared/middleware/clientMiddleware';

class App extends Component {
  render() {
    const createStore = (history) => {
      const client = new ApiClient();
      const data = window.__data;
      const reduxRouterMiddleware = routerMiddleware(history);

      const middleware = [clientMiddleware(client), reduxRouterMiddleware, thunk];

      const enhancer = compose(
        applyMiddleware(...middleware),
        DevTools.instrument()
      );

      const reducer = require('modules/reducers').default;
      const store = _createStore(reducer, data, enhancer);

      if(module.hot) {
        module.hot.accept('modules/reducers', () => {
          store.replaceReducer(require('modules/reducers'));
        })
      }

      return store;
    };

    const history = createHistory();
    const store = createStore(history);

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Rebass>

            </Rebass>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
