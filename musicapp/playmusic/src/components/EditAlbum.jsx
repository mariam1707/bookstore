import React, { Component } from 'react';
import EditTrack            from './EditTrack';

class EditAlbum extends Component {
    state = {
        album: {}
    }

    componentDidMount() {
        this.setState({
            album: this.props.album,
        });
    }


    onHandleSaveAlbumTitle = (e) => {
        this.setState({
            ...this.state.album,
            album: {
                title: e.target.value
            }
        });
    }

    onHandleSaveAlbumSong = (id, song) => {
        this.setState({
            ...this.state.album,
            songs: [ ...this.state.album.songs.slice(0, id), song, ...this.state.album.songs.slice(id + 1) ]
        });
    }


    render() {
        return (
            <div className='EditTrackComponent' >
                { console.log('ALBUM', this.state.album) }
                <div className='EditTrackAlbumTitle' >
                    <p>{ this.state.album.title }</p>
                    <input
                        type='text'
                        placeholder='album-title'
                        value={ this.state.album.title }
                        onChange={ this.onHandleSaveAlbumTitle }
                    />
                    <button type='button'>Ok</button>
                </div>
                { console.log(this.state.album) }
                {
                    this.state.album.songs && this.state.album.songs.map((song, id) => (
                        <EditTrack
                            song={ song }
                            key={ id }
                            id={ id }
                            onSaveSong={ this.onHandleSaveAlbumSong }
                        />
                    ))
                }

            </div >
        );
    }
}

export default EditAlbum;
