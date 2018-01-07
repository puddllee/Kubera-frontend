import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {Router, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {injectGlobal} from "styled-components";


import ApiClient from 'shared/apiClient';
import DevTools from 'components/devTools';
import BaseContainer from 'containers/baseContainer';
import LoginContainer from 'containers/loginContainer';
import AuthCallbackContainer from 'containers/authCallbackContainer';
import clientMiddleware from 'shared/middleware/clientMiddleware';

class App extends Component {
  render() {
    injectGlobal`
      body {
        color: #001B44;
        background-color: #f4f4f4;
      }
    `;

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

    const browserHistory = createHistory();
    const store = createStore(browserHistory);
    syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <div>
          <DevTools/>
          <Router history={browserHistory}>
            <Switch>
              <Route path="/auth/:provider/callback" component={AuthCallbackContainer}/>
              <Route path="/login" component={LoginContainer}/>
              <Route path="/" component={BaseContainer}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
