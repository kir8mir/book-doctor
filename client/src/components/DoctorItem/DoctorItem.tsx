import React, { FC, useState, useEffect } from 'react';
import './DoctorItem.scss';
import DateTimePicker from 'react-datetime-picker';
import classnames from 'classnames';
import { TimeGrid } from '../TimeGrid/TimeGrid';
import { PatientInfo } from '../PatientInfo/PatientInfo';
import { CardNav } from '../CardNav/CardNav';
import { SymptomsArea } from '../SymptomsArea/SymptomsArea';
import { bookUser } from '../../auth/auth';
import { setDocVisit } from '../../auth/auth';

interface Props {
  doc: { name: string, position: string, id: string, img: string, availableTime: string[], visitsDoc: object[] }
  setSelectedDocID: any
  selectedDocID: string
  userData: any;
  triggerTrigger: any;
}

export const DoctorItem: FC<Props> = ({ doc, setSelectedDocID, selectedDocID, userData, triggerTrigger}) => {
  const { name, position, id, img, availableTime, visitsDoc } = doc;
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(true);

  const [bookUserTrigger, setBookUserTrigger] = useState(null);
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState('');
  const [message, setMessage] = useState(' Your symptoms are:');

  const convertDate = (date: Date) => {
    const validDate = date.getUTCDate().toString() + '.' + (date.getMonth() + 1).toString() + '.' + date.getUTCFullYear().toString();

    return validDate;
  };

  useEffect(() => {
    if (bookUserTrigger) {
      bookUser(userData.userId, id, value, time, message, userData.visits);
      setDocVisit(id, userData.userId, value, time, visitsDoc, availableTime);
      triggerTrigger((value: any) => !value);
    }
  }, [bookUserTrigger]);

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
            setIsVisibleCalendar(true);
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
          <CardNav setIsVisibleCalendar={setIsVisibleCalendar} setShowTime={setShowTime} />
          <DateTimePicker onChange={onChange} value={value} format={'y-MM-dd'} isCalendarOpen={isVisibleCalendar} />
          {showTime &&
            <TimeGrid availableTime={availableTime} setTime={setTime} />}

          <PatientInfo value={value} time={time} docName={name} userData={userData} />
          <SymptomsArea setMessage={setMessage} message={message} />

          {time &&
            <a
              href="#"
              className="submit-booking-btn"
              onClick={() => {
                setIsVisibleCalendar(true);
                setOpenCalendar(false);
                setSelectedDocID((state: string) => {
                  return state === id ? '' : id;
                });
                setSelectedDoc(false);
                setShowTime(false);
                setBookUserTrigger(true);
                alert('Your visit was booked!');
              }}
            >
              Submit
            </a>
          }
        </>}
    </div >
  );
};