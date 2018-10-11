import React     from 'react';
import EditTrack from './EditTrack';

const EditAlbum = ({ album }) => (
    <div className='EditTrackComponent'>
        <div className='EditTrackAlbumTitle'>
            <p>{ album.title }</p>
            <input
                type='text'
                placeholder='trackname'
            />
            <button type='button'>Ok</button>
        </div>
        { album.songs && album.songs.map((song, id) => (
            <EditTrack song={ song } key={ id } />
        ))
        }

    </div>
);

export default EditAlbum;
