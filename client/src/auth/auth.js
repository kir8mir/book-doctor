import axios from 'axios';

export const getAcces = async (login, pass) => {
  let access_token;
  let userData;

  await axios.post('https://doctor-book.herokuapp.com/auth/login', {
    'username': login,
    'password': pass
  })
    .then(res => {
      access_token = res.data.access_token;
    });

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  };

  await axios.get('https://doctor-book.herokuapp.com/profile/', config)
    .then(resp => {
      userData = resp.data;
    });


  return userData;
};

export const bookUser = (userId, docId, data, time, symptom, visits) => {
  axios.patch(`https://doctor-book.herokuapp.com/users/${userId}`, {
    'visits': [...visits, {
      docId,
      data,
      time,
      symptom
    }]
  });
};

export const setDocVisit = async (docId, userId, data, time, visits, availableTime) => {
  await axios.patch(`https://doctor-book.herokuapp.com/docs/${docId}`, {
    'visitsDoc': [...visits, {
      userId,
      data,
      time,
    }]
  });

  await axios.patch(`https://doctor-book.herokuapp.com/docs/${docId}`, {
    'availableTime': availableTime.filter(t => t !== time)
  });

};
