import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css';

import './styles/styles.scss';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={} exact={ true } />
      <Route path="/create" component={} />
      <Route path="/edit" component={} />
      <Route path="/help" component={} />
      <Route component={} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<p>My boilerplate</p>, document.getElementById('app'))
