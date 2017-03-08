import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Main from './containers/Main';
import Client from './containers/Client';
import Settings from './containers/Settings';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistData } from './middleware/middleware';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, persistData)));

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
			<Route path="/client" component={Client} />
			<Route path="/settings" component={Settings} />
		</Route>
	  </Router>
  	</Provider>,
  document.getElementById('root')
);
