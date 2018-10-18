import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';
import MaskedInput          from 'react-text-mask';
import Input                from '@material-ui/core/Input';
import NewArtistView        from './NewArtistView';

class AddNewArtist extends Component {
    state = {
        name : '',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81k-3sh8OhL._SX355_.jpg',
        title: '',
        song : {
            title : '',
            length: '  :  ',
        },
        songs: [

        ],
        textmask: '  :  ',
    }

    handleChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSaveArtist = () => {
        if (!(this.state.name && this.state.image)) return;
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
        if (!this.state.song.title && !this.state.song.length) { return false }
        this.setState({
            ...this.state,
            songs: [
                ...this.state.songs, this.state.song
            ]

        });
        this.setState({
            song: {
                title : '',
                length: ''
            }
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
                    <Input
                        value={ this.state.song.length }
                        name='length'
                        onChange={ this.handleChangeSongName }
                        id="formatted-text-mask-input"
                        inputComponent={ TextMaskCustom }
                        className="InputLength"

                    />
                    <button type='button' onClick={ this.handleAddSong }>Добавить трек</button>
                    <button type='button' onClick={ this.handleSaveArtist }>Сохранить альбом</button>
                </div>
                <NewArtistView props={ this.state } />
            </div>
        );
    }
}
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            { ...other }
            ref={ inputRef }
            mask={ [ /\d/, /\d/, ':', /\d/, /\d/ ] }
            placeholderChar={ '\u2000' }
            showMask
        />
    );
}

export default AddNewArtist;
