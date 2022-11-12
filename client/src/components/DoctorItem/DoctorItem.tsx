import React from 'react';
import panda from './panda.jpg';
import './DoctorItem.scss';

export const DoctorItem = () => {
  return (
    <div className="doctor-card">
      <img
        src={panda}
        alt="doctor-panda"
        className="doctor-card__img"
      />

      <div className="doctor-card__description">
        <h3 className="doctor-card__description-name">
        Benjamin Panda
        </h3>

        <span className="doctor-card__description-position">
          Surgeon
        </span>
      </div>
    </div>
  );
};