import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';
import SaveIcon             from '@material-ui/icons/Save';
import Button               from '@material-ui/core/Button';

class EditArtist extends Component {
    state = {
        name: this.props.name,
        id  : this.props.id
    }

    handleUpdateName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className='EditArtistComponent'>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Artist title"
                    multiline
                    rowsMax="4"
                    rows='1'
                    value={ this.state.name }
                    onChange={ this.handleUpdateName }
                    margin="normal"
                    variant="outlined"
                    name='name'
                    placeholder='ArtistName'
                    className='editPageArtistInput'
                />
                <Button
                    variant="contained"
                    size="small"
                    onClick={ () => this.props.handleActionUpdateName(this.state) }
                    className='editPageAlbumButton'
                >
                    <SaveIcon />
                    Сохранить
                </Button>
            </div>
        );
    }
}

export default EditArtist;
