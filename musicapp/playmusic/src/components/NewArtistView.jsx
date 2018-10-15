import React from 'react';


const NewArtistView = ({ props }) => (
    <div className='NewArtistViewContent'>
        <p>Название артиста:<br /> { props.name }</p>
        <p>Название альбома: <br />{ props.title }</p>
        { props.songs && props.songs.map((song, id) => (
            <div key={ id }>

                <p><span>{ id + 1 }</span> { song.title }</p>
                <p>{ song.length }</p>
            </div>
        )) }

    </div>
);


export default NewArtistView;
