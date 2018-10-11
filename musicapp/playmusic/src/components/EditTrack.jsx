import React from 'react';

const EditTrack = ({ song }) => (
    <div className='EditTrackContent'>
        <div>
            <p>{ song.title }</p>
            <div>
                <input
                    type='text'
                    placeholder='trackname'
                />
                <button type='button'>Ok</button>
            </div>
        </div>
        <div>
            <p>{ song.length }</p>
            <input
                type='text'
                placeholder='length'
                className='EditTrackLengthInput'
            />
            <button type='button'>Ok</button>
        </div>
    </div>
);

export default EditTrack;
