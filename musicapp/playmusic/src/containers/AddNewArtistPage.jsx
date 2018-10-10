import React, { Component } from 'react';
import { connect }          from 'react-redux';
import HeaderMenu           from './HeaderMenu';
import AddNewArtist         from '../components/AddNewArtist';
import {
    fetchMusicAddSaga,
    fetchMusicRequest
} from '../actions/music';


class AddNewArtistPage extends Component {
    componentDidMount() {
        this.props.fetchMusicRequest();
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                <AddNewArtist handleAdd={ this.props.fetchMusicAddSaga } />
            </div>
        );
    }
}
function mapStateToProps() {
    return {

    };
}
const mapDispatchToProps = {
    fetchMusicAddSaga,
    fetchMusicRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewArtistPage);
