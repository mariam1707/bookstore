import React             from 'react';
import { Link }          from 'react-router-dom';

import ModalWindowArtist from '../components/ModalWindow';

class ArtistView extends React.Component {
    state = {
        isOpenModal: false,
    }

    handleOpenModalWindow = () => {
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
                <button type='button'>
                    <Link to={ {
                        pathname: `/edittrack/${ this.props.trackid }`,
                    } }
                    >Редактировать</Link></button>
                <button type='button' onClick={ this.handleDelete }>Удалить</button>
                { this.state.isOpenModal &&
                    <ModalWindowArtist
                        close={ this.handleOpenModalWindow }
                        track={ this.props.track }
                        save={ this.props.update }
                    />
                }
            </div>
        );
    }
}

export default ArtistView;
