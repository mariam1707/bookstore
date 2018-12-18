import React, { Component } from 'react';
import Nested from 'components/Nested';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

class NestedContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nested
          text="супер текстик"
          user={this.props.auth.user}
          isAuthenticated={this.props.auth.isAuthenticated}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {};
export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NestedContainer)
);
