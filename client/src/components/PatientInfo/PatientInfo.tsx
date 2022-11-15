import React, { FC, useState } from 'react';
import './PatientInfo.scss';

interface Props {
  value: Date;
  time: string;
  docName: string;
  userData: any;
}

export const PatientInfo: FC<Props> = ({ value, time, docName, userData }) => {
  const date = value.getUTCDate().toString() + '.' + (value.getMonth() + 1).toString() + '.' + value.getUTCFullYear().toString();

  return (
    <div
      className="patient-info"
    >
      <ul className="patient-info-list">
        <li>{`Patient Name: ${userData.username}`}</li>
        <li>{`Doctor Name: ${docName}`}</li>
        <li>{`Date: ${date}`}</li>
        <li>{`Time: ${time}`}</li>
      </ul>
    </div>
  );
};
