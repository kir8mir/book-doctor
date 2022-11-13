import React from 'react';
import { DoctorItem } from '../DoctorItem/DoctorItem';
import { getDocs } from '../../api/api';
import { FC } from 'react';
import './DoctorsList.scss';
import { useState } from 'react';
import classnames from 'classnames';

interface Props {
  docs: any[]
}

export const DoctorsList: FC<Props> = ({ docs }): any => {
  const [selectedDocID, setSelectedDocID] = useState('');

  return (
    <div className={classnames('doctors-list', { 'doctors-list-open': selectedDocID })}>
      {docs.map((doc) => (
        !selectedDocID
          ? <DoctorItem key={doc.id} doc={doc} selectedDocID={selectedDocID} setSelectedDocID={setSelectedDocID} />
          : selectedDocID === doc.id && <DoctorItem key={doc.id}  doc={doc} selectedDocID={selectedDocID} setSelectedDocID={setSelectedDocID} />
      ))}
    </div>


  );
};
