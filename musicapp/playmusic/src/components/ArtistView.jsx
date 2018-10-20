import React      from 'react';
import { Link }   from 'react-router-dom';
import Button     from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon       from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class ArtistView extends React.Component {
    state = {
        isOpenModal: false,
    }

    onhandleOpenModalWindow = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    }

    handleDelete = () => {
        const payload = {
            arrid  : this.props.trackid,
            trackid: this.props.track.id
        };
        this.props.onhandleDelete(payload);
    }

    render() {
        return (
            <div className='trackView'>
                <Link to={ {
                    pathname: `/trackpage/${ this.props.trackid }`,
                } }
                >
                    <img src={ this.props.track.image } alt='image is out' />
                    <p>{ this.props.track.name }</p>
                </Link>
                <Button variant="fab" color="secondary" aria-label="Edit" className='mainButton'>
                    <Link to={ {
                        pathname: `/edittrack/${ this.props.trackid }`,
                    } }
                    >
                        <Icon>edit_icon</Icon>
                    </Link>
                </Button>
                <IconButton aria-label="Delete" className='mainButton' onClick={ this.handleDelete }>
                    <DeleteIcon fontSize="large" />
                </IconButton>

            </div>
        );
    }
}

export default ArtistView;
