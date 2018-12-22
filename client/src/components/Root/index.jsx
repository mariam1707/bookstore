// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Menu from 'containers/Menu';
import type { PropsType } from './types';

export default ({ route }: PropsType): React.Node => (
  <>
    <Menu />
    {renderRoutes(route.routes)}
  </>
);
