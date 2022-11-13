import classNames from 'classnames';
import React, { FC, useState } from 'react';
import './TimeGrid.scss';

interface Props {
  availableTime: string[];
  setTime: (time: string) => void;
}

export const TimeGrid: FC<Props> = ({ availableTime, setTime }) => {
  const [togglTime, setTogglTime] = useState(true);

  const isPosibleTime = (time: string) => {
    if (!availableTime.includes(time)) {
      alert('Doctor is busy in this time');

      return;
    }

    setTime(time);
    setTogglTime(false);
  };

  const validCell = (time: string) => !availableTime.includes(time);

  return (

    togglTime &&
    <div className="time-grid">
      <div
        className={classNames(
          'time-grid-cell',
          { 'time-grid-cell-off': validCell('10:00') }
        )}
        onClick={() => {
          isPosibleTime('10:00');
        }}
      >
        <p>10:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('11:00') })}
        onClick={() => isPosibleTime('11:00')}
      >
        <p>11:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('12:00') })}
        onClick={() => isPosibleTime('12:00')}
      >
        <p>12:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('13:00') })}
        onClick={() => isPosibleTime('13:00')}
      >
        <p>13:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('14:00') })}
        onClick={() => isPosibleTime('14:00')}
      >
        <p>14:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('15:00') })}
        onClick={() => isPosibleTime('15:00')}
      >
        <p>15:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('16:00') })}
        onClick={() => isPosibleTime('16:00')}
      >
        <p>16:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('17:00') })}
        onClick={() => isPosibleTime('17:00')}
      >
        <p>17:00</p>
      </div>
      <div
        className={classNames('time-grid-cell', { 'time-grid-cell-off': validCell('18:00') })}
        onClick={() => isPosibleTime('18:00')}
      >
        <p>18:00</p>
      </div>
    </div >
  );
};
