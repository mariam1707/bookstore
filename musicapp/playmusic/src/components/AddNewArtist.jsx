import React, { Component } from 'react';
import AddNewTrack from './AddNewTrack';

class AddNewArtist extends Component {
    state = {
        artist: {
            name: '',
            albums: [],
            image: '',
        },
        song: {
            title: '',
            length: '',
        },
        title: '',

    }

    handleChangeArtistName = (e) => {
        this.setState({
            ...this.state,
            artist: {
                ...this.state.artist,
                [e.target.name]: e.target.value,
            }
        });
    }

    // handleChangeAlbumName = (e) => {
    //     this.setState({
    //         ...this.state,
    //         artist: {
    //             ...this.state.artist,
    //             albums: [
    //                 {
    //                     title: e.target.value,
    //                     songs: []
    //                 }
    //             ]
    //         }
    //     });
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    handleChangeSongName = (e) => {
        this.setState({
            song: {
                ...this.state.song,
                [e.target.name]: e.target.value
            }
        });
    }

    handleAddSong = () => {
        this.setState({
            ...this.state,
            artist: {
                ...this.state.artist,
                albums: [
                    {
                        title: this.state.title,
                        songs: [this.state.songs]
                    }
                ]

            }
        });
    }

    handleSaveArtist = (state) => {
        const artist = {
            name: this.state.artist.name,
            image: this.state.artist.image,
            albums: state.album

        };

        console.log('ARTIST', artist);
    }

    handleSubmit = () => {
        const track = {
            name: this.state.artistname,
            image: 'http://nashemisto.dp.ua/wp-content/uploads/2018/01/1.jpg',
        };
        this.props.handleAdd(track);
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <div>
                    <p>Введите имя группы:</p>
                    <input type='text'
                        name='name'
                        value={this.state.artist.name}
                        onChange={this.handleChangeArtistName}
                    />

                    { /* <p>Введите название альбома</p>
                    <input type='text'
                        name='title'
                        value={this.state.artist.albums.title}
                        onChange={this.handleChangeAlbumName}
                    /> */ }
                    <AddNewTrack onSaveAlbum={this.handleSaveArtist} />
                    <button type='button' onClick={this.props.handleAdd}>ЩВФЩВЩФЩВщ</button>
                    { /* <p>Введите название трека</p>
                    <input type='text'
                        name='title'
                        value={ this.state.songname }
                        onChange={ this.handleChangeSongName }
                    />
                    <p>Введите длину трека</p>
                    <input type='text'
                        name='length'
                        value={ this.state.songlength }
                        onChange={ this.handleChangeSongName }
                    />
                    <button type='button' onClick={ this.handleAddSong }>Добавить трек</button> */ }
                </div>

            </div>
        );
    }
}

export default AddNewArtist;
