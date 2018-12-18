// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Menu from 'containers/Menu';

export default ({ route }): React.Node => (
  <>
    <Menu />
    {renderRoutes(route.routes)}
  </>
);
