import React, { FC } from 'react';
import './Visits.scss';

interface Props {
  userData: any;
  docs: any;
}

export const Visits: FC<Props> = ({ userData, docs }) => {
  const { visits, userId } = userData;

  return (
    <div className="visits">
      {visits.map((visit: any) => (
        <div key={userId} className="visits__card">
          <ul className="visits__items">
            <li>{`Doctor Name: ${docs.find((doc: any) => doc.id === visit.docId).name}`}</li>
            <li>{`Date: ${visit.data.toString().split('T')[0]}`}</li>
            <li>{`Time: ${visit.time}`}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
