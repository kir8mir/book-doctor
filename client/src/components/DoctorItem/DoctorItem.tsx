import React, { FC, useState } from 'react';
import './DoctorItem.scss';
import DateTimePicker from 'react-datetime-picker';
import classnames from 'classnames';
import { TimeGrid } from '../TimeGrid/TimeGrid';
import { PatientInfo } from '../PatientInfo/PatientInfo';
import { useEffect } from 'react';


interface Props {
  doc: { name: string, position: string, id: string, img: string, availableTime: string[] }
  setSelectedDocID: any
  selectedDocID: string
}

export const DoctorItem: FC<Props> = ({ doc, setSelectedDocID, selectedDocID }) => {
  const { name, position, id, img, availableTime } = doc;
  const [value, onChange] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [time, setTime] = useState('');

  const convertDate = (date: Date) => {
    const validDate = date.getUTCDate().toString() + '.' + (date.getMonth() + 1).toString() + '.' + date.getUTCFullYear().toString();

    return validDate;
  };
  
  return (
    <div
      className={classnames('doctor-card', { 'selected-doctor': openCalendar })}
      onClick={() => {
        if (!openCalendar) {
          setOpenCalendar(true);
          setSelectedDocID((state: string) => {
            return state === id ? '' : id;
          });
          setTimeout(() => setSelectedDoc(true), 500);
          setTimeout(() => setShowTime(true), 900);
        }

      }}
    >
      {openCalendar &&
        <a
          href="#"
          className="close-btn"
          onClick={() => {
            setOpenCalendar(false);
            setSelectedDocID((state: string) => {
              return state === id ? '' : id;
            });
            setSelectedDoc(false);
            setShowTime(false);
          }}
        >
          CLOSE
        </a>}
      <img
        src={`http://localhost:3000/imgs/${img}`}
        alt="doctor-panda"
        className="doctor-card__img"
      />

      <div className="doctor-card__description">
        <h3 className="doctor-card__description-name">
          {name}
        </h3>

        <span className="doctor-card__description-position">
          {position}
        </span>
      </div>

      {selectedDocID === id &&
        <>
          <DateTimePicker onChange={onChange} value={value} format={'y-MM-dd'} isCalendarOpen={selectedDoc} />
          {showTime &&
            <TimeGrid availableTime={availableTime} setTime={setTime} />}

          <PatientInfo value={value} time={time} docName={name} />
        </>}
    </div >
  );
};