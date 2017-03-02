import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Main from './containers/Main';
import Client from './containers/Client';
import Settings from './containers/Settings';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Main} />
  		<Route path="/client" component={Client} />
  		<Route path="/settings" component={Settings} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
