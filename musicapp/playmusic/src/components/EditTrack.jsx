import React, { Component } from 'react';

class EditTrack extends Component {
    state = {
        song: {}
    }

    componentDidMount() {
        this.setState({
            song: this.props.song,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            song: nextProps.song,
        });
    }

    onHandleSaveSong = (e) => {
        this.setState({
            ...this.state,
            song: {
                ...this.state.song,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <div className='EditTrackContent'>
                <div>
                    <p>{ this.state.song.title }</p>
                    <div>
                        <input
                            type='text'
                            placeholder='trackname'
                            name='title'
                            value={ this.state.song.title }
                            onChange={ this.onHandleSaveSong }
                        />
                    </div>
                </div>
                <div>
                    <p>{ this.state.song.length }</p>
                    <input
                        type='text'
                        placeholder='length'
                        name='length'
                        value={ this.state.song.length }
                        className='EditTrackLengthInput'
                        onChange={ this.onHandleSaveSong }
                    />
                </div>
                <button type='button' onClick={ () => this.props.onSaveSong(this.props.id, this.state.song) }>Ok</button>
            </div>
        );
    }
}

export default EditTrack;
