import React, { Component } from 'react';


class AddNewTrack extends Component {
    state = {
        song: {
            title: '',
            length: '',
        },
        songs: [

        ],
        album: [
        ],
        title: ''
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
            album: [
                {
                    title: this.state.title,
                    songs: [
                        ...this.state.songs, this.state.song
                    ]
                }
            ]

        });
    }

    handleChangeAlbumName = (e) => {
        this.setState({
            title: e.target.value
        });
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
                    <p>Введите название альбома</p>
                    <input type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChangeAlbumName}
                    />
                    <p>Введите название трека</p>
                    <input type='text'
                        name='title'
                        value={this.state.song.title}
                        onChange={this.handleChangeSongName}
                    />
                    <p>Введите длину трека</p>
                    <input type='text'
                        name='length'
                        value={this.state.song.length}
                        onChange={this.handleChangeSongName}
                    />
                    <button type='button' onClick={this.handleAddSong}>Добавить трек</button>
                    <button type='button' onClick={() => this.props.onSaveAlbum(this.state)}>Сохранить альбом</button>

                </div>

            </div>
        );
    }
}

export default AddNewTrack;
