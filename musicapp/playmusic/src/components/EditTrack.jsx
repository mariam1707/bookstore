import React, { Component } from 'react';

class EditTrack extends Component {
    state = {
        albums: this.props.albums,
        songId: '',
        albumId: this.props.albumId,
        id: this.props.artistId,
    }

    onHandleSaveSong = (songId) => (e) => {
        this.setState({
            ...this.state,
            songId: songId,
            albums: [
                ...this.state.albums.slice(0, this.state.albumId),
                {
                    ...this.state.albums[this.state.albumId],
                    songs: [
                        ...this.state.albums[this.state.albumId].songs.slice(0, songId),
                        {
                            ...this.state.albums[this.state.albumId].songs[songId],
                            [e.target.name]: e.target.value
                        },
                        ...this.state.albums[this.state.albumId].songs.slice(songId + 1),
                    ]
                },
                ...this.state.albums.slice(this.state.albumId + 1)
            ]
        });
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                {this.state.albums[this.state.albumId].songs && this.state.albums[this.state.albumId].songs.map((song, idSong) => (
                    <div key={idSong} className='EditTrackContent'>
                        <div>
                            <p>{song.title}</p>
                            <div>
                                <input
                                    type='text'
                                    placeholder='trackname'
                                    name='title'
                                    value={song.title}
                                    onChange={this.onHandleSaveSong(idSong)}
                                />
                            </div>
                        </div>
                        <div>
                            <p>{song.length}</p>
                            <input
                                type='text'
                                placeholder='length'
                                name='length'
                                value={song.length}
                                className='EditTrackLengthInput'
                                onChange={this.onHandleSaveSong(idSong)}
                            />
                        </div>
                    </div>
                ))}
                <button type='button' onClick={() => this.props.onSaveSongs(this.state)}>Save</button>
            </div>
        );
    };
}

export default EditTrack;
