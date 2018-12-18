// @flow
import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import { setDisplayName, compose } from 'recompose';
// import Login from 'containers/Login';
import messages from 'locales/messages';

import type { PropsType } from './types';

addLocaleData([...en, ...ru]);

export default compose(
  setDisplayName<{}>('LanguageProvider'),
  connect(state => ({
    locale: state.locale,
  }))
)(
  ({ children, locale }: PropsType): React.Node => (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
);
