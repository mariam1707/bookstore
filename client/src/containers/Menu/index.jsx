// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Menu from 'components/Menu';
import { unsetCurrentUserAction } from 'actions/auth';
import { localeChangeAction } from 'actions/locale';
import type { PropsType } from './types';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {
  unsetCurrentUserAction,
  localeChangeAction,
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    ({
      auth: { user, isAuthenticated },
      unsetCurrentUserAction,
      localeChangeAction,
    }: PropsType): React.Node => (
      <Menu
        user={user}
        isAuthenticated={isAuthenticated}
        handleLogout={unsetCurrentUserAction}
        localeChangeAction={localeChangeAction}
      />
    )
  )
);
