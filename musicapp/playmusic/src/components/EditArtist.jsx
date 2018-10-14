import React, { Component } from 'react';

class EditArtist extends Component {
    state = {
        name: this.props.name,
        id: this.props.id
    }
    onHandleUpdateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (<div className='EditArtistComponent'>
            <div>
                <p>{this.state.name}</p>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='ArtistName'
                    name='name'
                    value={this.state.name}
                    onChange={this.onHandleUpdateName}

                />
                <button type='button' onClick={() => this.props.onActionUpdateName(this.state)}>Save</button>
            </div>
        </div>
        );
    }
}

export default EditArtist;
