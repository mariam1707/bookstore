// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Menu from 'components/Menu';
import { UnsetCurrentUserAction } from 'actions/auth';
import { localeChangeAction } from 'actions/locale';
import type { PropsType } from './types';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {
  UnsetCurrentUserAction,
  localeChangeAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    auth: { user, isAuthenticated },
    UnsetCurrentUserAction,
    localeChangeAction,
    children,
  }: PropsType): React.Node => (
    <Menu
      user={user}
      isAuthenticated={isAuthenticated}
      handleLogout={UnsetCurrentUserAction}
      localeChangeAction={localeChangeAction}
    >
      {children}
    </Menu>
  )
);
