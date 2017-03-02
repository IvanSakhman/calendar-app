import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './components/App/App';
import Main from './containers/Main/Main';
import Contact from './containers/Contact/Contact';
import Settings from './containers/Settings/Settings';

ReactDOM.render(
  <Router history = { browserHistory }>
  	<Route path = "/" component = { App }>
  		<IndexRoute component = { Main } />
  		<Route path = "/contact" component = { Contact } />
  		<Route path = "/settings" component = { Settings } />
  	</Route>
  </Router>,
  document.getElementById('root')
);
