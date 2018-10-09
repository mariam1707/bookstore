import React from 'react';

class ModalWindowArtist extends React.Component {
    state = {
        artistname: this.props.track.name,
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSave = () => {
        const track = Object.assign({}, this.props.track);
        track.name = this.state.artistname;
        this.props.save(track);
    }
    render() {
        return (
            <div className="modal" id="modal">
                <p>
                    {this.props.track.name}
                </p>
                <input
                    type='text'
                    name='artistname'
                    value={this.state.artistname}
                    onChange={this.handleChange} />
                <div>
                    <button type='button' onClick={this.handleSave} >Сохранить</button>
                    <button
                        type='button'
                        onClick={this.props.close}> Закрыть </button>
                </div>
            </div>
        )
    }
}



export default ModalWindowArtist;