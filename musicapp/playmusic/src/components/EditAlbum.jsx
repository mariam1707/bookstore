import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';
import SaveIcon             from '@material-ui/icons/Save';
import Button               from '@material-ui/core/Button';

import EditTrack            from './EditTrack';

class EditAlbum extends Component {
    state = {
        albums: this.props.albums,
        id    : this.props.id
    }

    onHandleSaveAlbumTitle = id => (e) => {
        this.setState({
            albums: [
                ...this.state.albums.slice(0, id),
                {
                    ...this.state.albums[id],
                    title: e.target.value
                },
                ...this.state.albums.slice(id + 1)
            ]
        });
    }

    // onHandleSaveAlbumSong = (songId, song, albumId) => {
    //     this.setState({
    //         albums: [
    //             ...this.state.albums.slice(0, albumId),
    //             {
    //                 ...this.state.albums[albumId],
    //                 songs: [
    //                     ...this.state.albums[albumId].songs.slice(0, songId),
    //                     song,
    //                     ...this.state.albums[albumId].songs.slice(songId + 1)
    //                 ]
    //             },
    //             ...this.state.albums.slice(albumId + 1)
    //         ]
    //     });
    // }

    render() {
        return (
            <div className='EditTrackWrap'>
                { this.state.albums && this.state.albums.map((album, id) => (
                    <div key={ id } className='EditTrackComponent' >
                        <div className='EditTrackAlbumTitle' >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Album title"
                                multiline
                                rowsMax="4"
                                rows='1'
                                value={ album.title }
                                onChange={ this.onHandleSaveAlbumTitle(id) }
                                margin="normal"
                                variant="outlined"
                                name='title'
                                placeholder='album title'
                                className='editPageAlbumInput'
                            />
                            <Button
                                variant="contained"
                                size="small"
                                onClick={ () => this.props.handleAlbumNameSave(this.state) }
                                className='editPageAlbumButton'
                            >
                                <SaveIcon />
                                Сохранить
                            </Button>
                        </div>
                        <EditTrack
                            albums={ this.state.albums }
                            albumId={ id }
                            artistId={ this.state.id }
                            onSaveSongs={ this.props.handleAlbumNameSave }
                        />
                    </div>
                )) }
            </div >
        );
    }
}
export default EditAlbum;
