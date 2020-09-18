import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getDates = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dates.json`)
    .then((response) => {
      const dateObjects = response.data;
      const dates = [];
      Object.keys(dateObjects).forEach((dateId) => {
        dateObjects[dateId].id = dateId;
        dates.push(dateObjects[dateId]);
      });
      resolve(dates);
    })
    .catch((err) => reject(err));
});

export default { getDates };
