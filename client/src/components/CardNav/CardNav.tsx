import React, { FC, useState } from 'react';
import './CardNav.scss';

interface Props {
  setIsVisibleCalendar: any;
  setShowTime: any;
}

export const CardNav: FC<Props> = ({ setIsVisibleCalendar, setShowTime }) => {

  return (
    <div className="card-nav">
      <a
        href="#"
        className="card-nav-btn calendar-open-btn"
        onClick={() => setIsVisibleCalendar((value: boolean) => !value)}
      >
        Open Calendar
      </a>

      <a
        href="#"
        className="card-nav-btn time-open-btn"
        onClick={() => setShowTime((value: boolean) => !value)}
      >
        Open Time Picker
      </a>
    </div>
  );
};
