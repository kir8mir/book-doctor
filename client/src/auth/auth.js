import axios from 'axios';

export const getAcces = async (login, pass) => {
  let access_token;
  let userData;

  await axios.post('http://localhost:3000/auth/login', {
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

  await axios.get('http://localhost:3000/profile/', config)
    .then(resp => {
      userData = resp.data;
    });


  return userData;
};

export const bookUser = (userId, docId, data, time, symptom, visits) => {
  axios.patch(`http://localhost:3000/users/${userId}`, {
    'visits': [...visits, {
      docId,
      data,
      time,
      symptom
    }]
  });
};

export const setDocVisit = async (docId, userId, data, time, visits, availableTime) => {
  await axios.patch(`http://localhost:3000/docs/${docId}`, {
    'visitsDoc': [...visits, {
      userId,
      data,
      time,
    }]
  });

  await axios.patch(`http://localhost:3000/docs/${docId}`, {
    'availableTime': availableTime.filter(t => t !== time)
  });

};
