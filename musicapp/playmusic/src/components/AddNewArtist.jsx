import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';

import NewArtistView        from './NewArtistView';

class AddNewArtist extends Component {
    state = {
        name : '',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81k-3sh8OhL._SX355_.jpg',
        title: '',
        song : {
            title : '',
            length: '',
        },
        songs: [

        ],
    }

    handleChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSaveArtist = () => {
        const artist = {
            name  : this.state.name,
            image : this.state.image,
            albums: [
                {
                    title: this.state.title,
                    songs: this.state.songs,
                    image: 'https://images-na.ssl-images-amazon.com/images/I/81k-3sh8OhL._SX355_.jpg'
                }
            ]

        };

        this.props.handleAdd(artist);
    }

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
            songs: [
                ...this.state.songs, this.state.song
            ]

        });
    }

    render() {
        return (
            <div className='AddPageWrap'>
                <div className='AddPageInputs'>
                    <TextField
                        id="filled-name"
                        label="Имя группы:"
                        name='name'
                        value={ this.state.name }
                        onChange={ this.handleChangeData }
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-name"
                        label="Название альбома:"
                        name='title'
                        value={ this.state.title }
                        onChange={ this.handleChangeData }
                        margin="normal"
                        variant="filled"
                    />

                    <TextField
                        id="filled-name"
                        label="Название трека:"
                        name='title'
                        value={ this.state.song.title }
                        onChange={ this.handleChangeSongName }
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-name"
                        label="Длина трека:"
                        name='length'
                        value={ this.state.song.length }
                        onChange={ this.handleChangeSongName }
                        margin="normal"
                        variant="filled"
                    />
                    <button type='button' onClick={ this.handleAddSong }>Добавить трек</button>
                    <button type='button' onClick={ this.handleSaveArtist }>Сохранить альбом</button>
                </div>
                <NewArtistView props={ this.state } />
            </div>
        );
    }
}

export default AddNewArtist;
