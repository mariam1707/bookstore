// @flow
import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import { setDisplayName, compose } from 'recompose';
import Login from 'containers/Login';
import { Route, Switch } from 'react-router';
import Registration from 'components/Registration';
import RestorePassword from 'containers/RestorePassword';
// import Content from 'containers/Content';
import BooksWrap from 'containers/BooksWrap';
import SingleBookCreateView from 'containers/SingleBookCreateView';
import messages from 'locales/messages';
import { ConnectedRouter } from 'connected-react-router';
import history from 'helpers/history';
import type { PropsType } from './types';

addLocaleData([...en, ...ru]);

export default compose(
  setDisplayName<{}>('LanguageProvider'),
  connect(state => ({
    locale: state.locale,
  }))
)(
  ({ locale }: PropsType): React.Node => (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={BooksWrap} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/restore" component={RestorePassword} />
          <Route path="/create-book" component={SingleBookCreateView} />
        </Switch>
      </ConnectedRouter>
    </IntlProvider>
  )
);
