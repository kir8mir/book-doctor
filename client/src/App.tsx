import React from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList';
import './style/index.scss';
import './style/reset.css';
import {getDocs} from './api/api';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocs().then(res => {
      setDocs(res.data);
    });
  }, []);

  console.log(docs);
  return (
    <div className="App">
      <DoctorsList docs={docs} />
    </div>
  );
};
