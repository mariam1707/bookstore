// @flow
import * as React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import setDisplayName from 'recompose/setDisplayName';

import routes from './routes';

type PropsType = {
  history: Object,
};

export default setDisplayName<{}>('RouterComponent')(
  ({ history }: PropsType): React.Node => <Router history={history}>{renderRoutes(routes)}</Router>
);
