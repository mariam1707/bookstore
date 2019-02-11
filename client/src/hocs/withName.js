import * as React from 'react';

export default name => Component =>
  class extends React.Component {
    render() {
      return <Component {...this.props} form={name} />;
    }
  };
