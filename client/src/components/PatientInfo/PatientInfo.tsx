import React, { FC, useState } from 'react';

interface Props {
  value: Date;
  time: string;
  docName: string;
}

export const PatientInfo:FC<Props> = ({ value, time, docName }) => {
  const date = value.getUTCDate().toString() + '.' + (value.getMonth() + 1).toString() + '.' + value.getUTCFullYear().toString();

  console.log(date);
  
  return (
    <div className="patient-info">
      <ul className="patient-info-list">
        <li>Patient Name: Boby</li>
        <li>{`Doctor Name: ${docName}`}</li>
        <li>{`Date: ${date}`}</li>
        <li>{`Time: ${time}`}</li>
      </ul>
    </div>
  );
};
