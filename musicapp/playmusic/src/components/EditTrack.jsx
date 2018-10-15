import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';
import SaveIcon             from '@material-ui/icons/Save';
import Button               from '@material-ui/core/Button';

class EditTrack extends Component {
    state = {
        albums : this.props.albums,
        songId : '',
        albumId: this.props.albumId,
        id     : this.props.artistId,
    }

    onHandleSaveSong = songId => (e) => {
        this.setState({
            ...this.state,
            songId,
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
                { this.state.albums[this.state.albumId].songs &&
                    this.state.albums[this.state.albumId].songs.map((song, idSong) => (
                        <div key={ idSong } className='EditTrackContent'>
                            <div>
                                <div>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Track Name"
                                        multiline
                                        rowsMax="4"
                                        rows='2'
                                        value={ song.title }
                                        onChange={ this.onHandleSaveSong(idSong) }
                                        margin="normal"
                                        variant="outlined"
                                        name='title'
                                        placeholder='trackname'
                                        className='editPageInput'
                                    />

                                </div>
                            </div>
                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Track Name"
                                    multiline
                                    rowsMax="4"
                                    rows='2'
                                    value={ song.length }
                                    onChange={ this.onHandleSaveSong(idSong) }
                                    margin="normal"
                                    variant="outlined"
                                    name='length'
                                    placeholder='length'
                                    className='editPageInput'
                                />
                            </div>
                        </div>
                    )) }
                <Button
                    variant="contained"
                    size="large"
                    onClick={ () => this.props.onSaveSongs(this.state) }
                    className='editPageButton'
                >
                    <SaveIcon />
                    Сохранить
                </Button>
            </div>
        );
    }
}

export default EditTrack;
