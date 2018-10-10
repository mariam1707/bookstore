import React from 'react';


const TrackView = ({ track }) => (
    <div className='ArtistView-wrap'>
        { track.albums.map((album, id) => (
            <div key={ id } className='ArtistView-content'>
                <img src={ album.image } />
                <p>{ album.title }</p>
                {
                    album.songs.map((song, idsong) => (
                        <div key={ idsong }>
                            <p><span>{ idsong + 1 }</span>{ song.title }</p>
                            <p>{ song.length }</p>
                        </div>
                    ))
                }

            </div>
        ))
        }
    </div>
);

export default TrackView;
