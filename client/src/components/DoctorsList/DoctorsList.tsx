import React from 'react';
import { DoctorItem } from '../DoctorItem/DoctorItem';
import { getDocs } from '../../api/api';
import { FC } from 'react';

interface Props {
  docs: any[]
}

export const DoctorsList: FC<Props> = ({ docs }): any => {

  return (
    docs.map((doc) => (
      <DoctorItem key={doc.id} />
    ))

  );
};
