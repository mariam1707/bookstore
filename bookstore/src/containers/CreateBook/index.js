import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sagaBookAdd } from '../../actions/books';

class CreateBook extends Component {
    render() {
        return (
            <div>
                CreateBook
        </div>
        );
    }
}

function mapStateToProps(state) {
    return ({

    });
}
const mapDispatchToProps = {
    sagaBookAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
