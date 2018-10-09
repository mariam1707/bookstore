import React from 'react';
import ArtistView from './ArtistView';
const TrackView = ({ track }) => {
    return (
        <div className='ArtistView-wrap'>
            {track.albums.map((album, id) => (
                <div key={id} className='ArtistView-content'>
                    <img src={album.image} ></img>
                    <p>{album.title}</p>
                    {
                        album.songs.map((song, id) => (
                            <div key={id}>
                                <p><span>{id + 1}-></span>{song.title}</p>
                                <p>{song.length}</p>
                            </div>
                        ))
                    }

                </div>
            ))
            }
        </div>
    );
};

export default TrackView;