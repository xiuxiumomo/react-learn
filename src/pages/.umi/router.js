import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.js').default,
      },
      {
        path: '/ask',
        exact: true,
        component: require('../ask/index.js').default,
      },
      {
        path: '/details/:id',
        exact: true,
        component: require('../details/$id.js').default,
      },
      {
        path: '/example',
        exact: true,
        component: require('../example/index.js').default,
      },
      {
        path: '/goods',
        exact: true,
        component: require('../goods/index.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/job',
        exact: true,
        component: require('../job/index.js').default,
      },
      {
        path: '/share',
        exact: true,
        component: require('../share/index.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('F:/react/react-learn/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('F:/react/react-learn/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return <Router history={history}>{renderRoutes(routes, props)}</Router>;
}
