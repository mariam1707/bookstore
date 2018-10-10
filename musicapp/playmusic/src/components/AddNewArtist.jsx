import React, { Component } from 'react';

class AddNewArtist extends Component {
    state = {
        artistname: '',
        albumname : '',
        trackname : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = () => {
        const track = {
            name : this.state.artistname,
            image: 'http://nashemisto.dp.ua/wp-content/uploads/2018/01/1.jpg',
        };
        this.props.handleAdd(track);
    }

    render() {
        return (
            <div>
                <div>
                    <p>Введите имя группы:</p>
                    <input type='text'
                        name='artistname'
                        value={ this.state.artistname }
                        onChange={ this.handleChange }
                    />
                    <p>Введите название альбома</p>
                    <input type='text'
                        name='albumname'
                        value={ this.state.albumname }
                        onChange={ this.handleChange }
                    />
                    <p>Введите название трека</p>
                    <input type='text'
                        name='trackname'
                        value={ this.state.trackname }
                        onChange={ this.handleChange }
                    />
                    <button type='button' onClick={ this.handleSubmit }>Добавить трек</button>
                </div>

            </div>
        );
    }
}

export default AddNewArtist;
