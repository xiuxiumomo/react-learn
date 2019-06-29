import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import * as router from './routes';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={router.Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
