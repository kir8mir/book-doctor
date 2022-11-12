import React from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList.tsx';
import './style/index.scss';
import './style/reset.css';

export const App = () => {
  return (
    <div className="App">
      <DoctorsList />
    </div>
  );
};
