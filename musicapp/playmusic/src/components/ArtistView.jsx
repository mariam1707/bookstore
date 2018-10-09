import React from 'react';
import { Link } from 'react-router-dom';

import ModalWindowArtist from '../components/ModalWindow';

class ArtistView extends React.Component {
    state = {
        isOpenModal: false,
    }
    handleOpenModalWindow = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })
    }
    render() {
        return (
            <div className='trackView'>
                <Link to={{
                    pathname: `/trackpage/${this.props.trackid}`,
                }}>
                    <img src={this.props.track.image} alt='image is out'></img>
                    <p>{this.props.track.name}</p>
                </Link>
                <button type='button' onClick={this.handleOpenModalWindow}>Редактировать</button>
                {this.state.isOpenModal &&
                    <ModalWindowArtist
                        close={this.handleOpenModalWindow}
                        track={this.props.track}
                        save={this.props.update} />
                }
            </div>
        )
    }

}

export default ArtistView;