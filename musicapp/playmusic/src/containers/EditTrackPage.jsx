import React, { Component }                        from 'react';
import { connect }                                 from 'react-redux';

import { fetchMusicRequest, fetchMusicUpdateSaga } from '../actions/music';

import EditArtist                                  from '../components/EditArtist';
import EditAlbum                                   from '../components/EditAlbum';
import HeaderMenu                                  from './HeaderMenu';

class EditTrackPage extends Component {
    state = {
        data: {},
    };

    componentDidMount() {
        this.props.fetchMusicRequest();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.music[this.props.match.params.id]
        });
    }

    handleUpdateName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSave = () => {
        // this.props.fetchMusicUpdateSaga(this.state);
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                { !this.props.music ? <div className="Loader">WAIT PLS</div> :
                <div className='EditPageContainer'>
                        <EditArtist
                            artistName={ this.state.data.name }
                            handleUpdateName={ this.handleUpdateName }
                            value={ this.state.data.name }
                        />
                        <div className='EditTrackWrap'>
                            { this.state.data.albums && this.state.data.albums.map((album, idAlbum) => (
                                <EditAlbum
                                    key={ idAlbum }
                                    idAlbum={ idAlbum }
                                    album={ album }
                                    handleUpdateName={ this.handleUpdateName }
                                    value={ this.state.data.albums.title }
                                />
                            )) }
                        </div>
                    </div>
                }
                <button type='button' onClick={ this.handleSave }>СОХРАНИТЬ</button>
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
    fetchMusicUpdateSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackPage);
