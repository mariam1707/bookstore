import React, { Component } from 'react';
import EditTrack from './EditTrack';

class EditAlbum extends Component {
    state = {
        albums: this.props.albums,
        id: this.props.id
    }

    onHandleSaveAlbumTitle = (id) => (e) => {
        this.setState({
            albums: [
                ...this.state.albums.slice(0, id),
                {
                    ...this.state.albums[id],
                    title: e.target.value
                },
                ...this.state.albums.slice(id + 1)
            ]
        })
    }
    onHandleSaveAlbumSong = (songId, song, albumId) => {
        console.log(songId, song, albumId);
        this.setState({
            albums: [
                ...this.state.albums.slice(0, albumId),
                {
                    ...this.state.albums[albumId],
                    songs: [
                        ...this.state.albums[albumId].songs.slice(0, songId),
                        song,
                        ...this.state.albums[albumId].songs.slice(songId + 1)
                    ]
                },
                ...this.state.albums.slice(albumId + 1)
            ]
        })
    }
    render() {
        return (
            <div className='EditTrackWrap'>
                {this.state.albums && this.state.albums.map((album, id) => (
                    <div key={id} className='EditTrackComponent' >
                        <div className='EditTrackAlbumTitle' >
                            <p>{album.title}</p>
                            <input
                                type='text'
                                placeholder='album-title'
                                name='title'
                                value={album.title}
                                onChange={this.onHandleSaveAlbumTitle(id)}
                            />
                            <button type='button' onClick={() => this.props.onAlbumNameSave(this.state)}>Save title</button>
                        </div>
                        <EditTrack
                            albums={this.state.albums}
                            albumId={id}
                            artistId={this.state.id}
                            onSaveSongs={this.props.onAlbumNameSave}
                        />
                    </div>
                ))}
            </div >
        );
    }
};
export default EditAlbum;
