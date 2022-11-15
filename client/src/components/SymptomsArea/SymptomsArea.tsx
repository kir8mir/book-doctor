import React, { FC, useState } from 'react';
import './SymptomsArea.scss';

interface Props {
  message: string;
  setMessage: (text: string) => void;
}

export const SymptomsArea:FC<Props> = ({ message, setMessage}) => {

  return (
    <>

      <textarea
        className="symptoms-area"
        name="symptoms"
        id="" cols={30}
        rows={10}
        value={message}
        onChange={(event => setMessage(event.target.value))}
      >
      </textarea>
    </>

  );
};
