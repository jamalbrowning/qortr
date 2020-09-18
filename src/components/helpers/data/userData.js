import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const userData = response.data;
      const myUserData = [];

      if (userData) {
        Object.keys(userData).forEach((userId) => {
          const user = userData[userId];
          user.id = userId;
          myUserData.push(user);
        });
      }

      resolve(myUserData);
    })
    .catch((err) => reject(err));
});

export default { getUserByUid };
