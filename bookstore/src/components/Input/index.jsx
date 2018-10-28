import React from 'react';

const Input = ({ name, text, onHandleChange }) => (
    <div className="input-group mb-3">
        {console.log(name, text, onHandleChange)}
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">{text}</span>
        </div>
        <input
            type="text"
            className="form-control"
            placeholder="Author"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name={name}
            value={text}
            onClick={onHandleChange}
        />
    </div>
)

export default Input;
