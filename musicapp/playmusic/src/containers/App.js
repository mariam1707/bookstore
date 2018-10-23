import React, { Component } from 'react';
import { connect }          from 'react-redux';


import ArtistView           from '../components/ArtistView';
import HeaderMenu           from './HeaderMenu';


import {
    fetchMusicRequest,
    fetchMusicUpdateSaga,
    fetchMusicDelete
} from '../actions/music';

class App extends Component {
    state = {
        selectedId   : undefined,
        isOpenModal  : false,
        filterArtists: '',
    }

    componentDidMount() {
        this.props.fetchMusicRequest();
    }

    handleOpenModalWindow = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    }
    handleFilter = (e) => {
        this.setState({
            filterArtists: e.target.value.toLowerCase(),
        })
    }

    render() {
        return (
            <React.Fragment>
                <HeaderMenu />
                <div className='filterWrap'>
                    <label>Поиск</label>
                    <input type='text' name='filter' onChange={ this.handleFilter } />
                </div>
                <div className='wrap-track-view'>
                    { !this.props.music.length ? (
                        <div>WAIT PLS</div>
                    ) : (this.props.music.filter(
                        track => track.name.toLowerCase().includes(this.state.filterArtists)
                    ).map((track, id) => (
                        <div key={ id }>
                            <ArtistView
                                track={ track }
                                trackid={ id }
                                update={ this.props.fetchMusicUpdateSaga }
                                onhandleDelete={ this.props.fetchMusicDelete }
                            />
                        </div>
                    )))
                    }

                </div>

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return ({
        music: state.music.music,
    });
}
const mapDispatchToProps = {
    fetchMusicRequest,
    fetchMusicUpdateSaga,
    fetchMusicDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
