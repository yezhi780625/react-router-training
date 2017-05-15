import React from 'react';
// import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route,
  browserHistory,
  Link
} from 'react-router-dom';

const Hello = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>This is hello page.</h3>
    </div>
  );
}
const Child = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}
// this is the default behavior
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

const supportsHistory = 'pushState' in window.history;

const Root = () => {
  return (
    <Router basename="yezhi" getUserConfirmation={getConfirmation} forceRefresh={!supportsHistory}>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/zillow-group">Zillow Group</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/modus-create">Modus Create</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>
        <Route path="/hello" component={Hello} />
        <Route path="/:id" component={Child} />
      </div>
    </Router>
  );
}


/*

const Root = ({}) => (
  // <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  // </Provider>
);*/


export default Root;