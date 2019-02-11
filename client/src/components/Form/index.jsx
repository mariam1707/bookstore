import React from 'react';

export default function Form({ handleSubmit }) {
  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        ОТПРАВИТЬ
      </button>
    </div>
  );
}
