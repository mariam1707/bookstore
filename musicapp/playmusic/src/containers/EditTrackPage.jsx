import React, { Component } from 'react';
import { connect }          from 'react-redux';

import {
    fetchMusicRequest,
    fetchMusicUpdateSaga,
    fetchMusicUpdateArtistNameSaga,
    fetchMusicUpdateAlbumNameSaga,
    fetchMusicUpdateSongsSaga,
} from '../actions/music';

import EditArtist from '../components/EditArtist';
import EditAlbum  from '../components/EditAlbum';
import HeaderMenu from './HeaderMenu';

class EditTrackPage extends Component {

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.music) {
            return {
                data: nextProps.music[nextProps.match.params.id]
            };
        }

        return null;
    }
    state = {
        data: [],
    };

    componentDidMount() {
        this.props.fetchMusicRequest();
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                { !this.props.music ? <div className="Loader">WAIT PLS</div> :
                    <div className='EditPageContainer'>
                        <EditArtist
                            name={ this.state.data.name }
                            id={ this.state.data.id }
                            handleActionUpdateName={ this.props.fetchMusicUpdateArtistNameSaga }
                        />
                        <div className='EditTrackWrap'>
                            <EditAlbum
                                albums={ this.state.data.albums }
                                id={ this.state.data.id }
                                handleAlbumNameSave={ this.props.fetchMusicUpdateAlbumNameSaga }
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return ({
        music: state.music.music
    });
}

const mapDispatchToProps = {
    fetchMusicRequest,
    fetchMusicUpdateSaga,
    fetchMusicUpdateArtistNameSaga,
    fetchMusicUpdateAlbumNameSaga,
    fetchMusicUpdateSongsSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackPage);
