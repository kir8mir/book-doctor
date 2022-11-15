import React from 'react';
import { DoctorsList } from './components/DoctorsList/DoctorsList';
import { Login } from './components/Login/Login';
import { Visits } from './components/Visits/Visits';
import './style/index.scss';
import './style/reset.css';
import { getDocs } from './api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAcces } from './auth/auth';

export const App = () => {
  const [docs, setDocs] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [trigger, triggerTrigger] = useState(false);


  useEffect(() => {

    const allDocs = async () => (await getDocs()).data;
    const setAllDocs = async () => setDocs(await allDocs() as any);
    setAllDocs();

    if (userName && userPass) {
      const userAcces = async () => await getAcces(userName, userPass);
      const setUserAcces = async () => setUserData(await userAcces());
      setUserAcces();
    }
  }, [userName, userPass, trigger]);

  return (
    <div className="App">
      {!userData
        ? <Login setUserName={setUserName} setUserPass={setUserPass} />
        : <>
          <DoctorsList
            docs={docs}
            userData={userData}
            triggerTrigger={triggerTrigger}
          />
          <Visits userData={userData} docs={docs} />
        </>

      }
    </div>
  );
};
function async(): void {
  throw new Error('Function not implemented.');
}

