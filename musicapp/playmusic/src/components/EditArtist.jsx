import React from 'react';

const EditArtist = ({ artistName, handleUpdateName, value }) => (
    <div className='EditArtistComponent'>

        <div>
            <p>{ artistName }</p>
        </div>
        <div>
            <input
                type='text'
                placeholder='ArtistName'
                name='name'
                value={ value }
                onChange={ handleUpdateName }
            />
            <button type='button' onClick={ () => handleUpdateName() }>Ok</button>
        </div>
    </div>
);

export default EditArtist;
