import React, { Component }                        from 'react';
import { connect }                                 from 'react-redux';

import { fetchMusicRequest, fetchMusicUpdateSaga } from '../actions/music';

import EditArtist                                  from '../components/EditArtist';
import EditAlbum                                   from '../components/EditAlbum';
import HeaderMenu                                  from './HeaderMenu';

class EditTrackPage extends Component {
    // state = {
    //     id    : '',
    //     name  : '',
    //     albums: {
    //         title: '',
    //         songs: [
    //             {
    //                 title : '',
    //                 length: '',
    //             }
    //         ]
    //     },
    //     data: {},
    // }

    constructor(props) {
        super(props);
        this.state = {
            id    : '',
            name  : '',
            albums: {
                title: '',
                songs: [
                    {
                        title : '',
                        length: '',
                    }
                ]
            },
            data: {},
        };
        this.data  = {};
    }

    componentDidMount() {
        this.props.fetchMusicRequest();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id  : nextProps.music[this.props.match.params.id].id,
            name: nextProps.music[this.props.match.params.id].name,
            data: nextProps.music[this.props.match.params.id]

        });
        this.data = JSON.parse(JSON.stringify(nextProps.music[this.props.match.params.id]));
    }

    handleUpdateName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSave = () => {
        this.props.fetchMusicUpdateSaga(this.state);
    }

    render() {
        return (
            <div>
                { console.log('this.data', this.data) }
                <HeaderMenu />
                { !this.props.music ? <div className="Loader">WAIT PLS</div> :
                <div className='EditPageContainer'>
                        <EditArtist
                            artistName={ this.props.music[this.props.match.params.id].name }
                            handleUpdateName={ this.handleUpdateName }
                            value={ this.state.name }
                        />
                        <div className='EditTrackWrap'>
                            { this.props.music[this.props.match.params.id].albums && this.props.music[this.props.match.params.id].albums.map((album, idAlbum) => (
                                <EditAlbum key={ idAlbum } album={ album } />
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
