import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Nested = ({ text }) => (
  <div>
    <p>{text}</p>
    <FormattedMessage {...messages.test} />
  </div>
);

export default Nested;
