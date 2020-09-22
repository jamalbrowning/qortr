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

const createDate = (newDate) => axios.post(`${baseUrl}/dates.json`, newDate);

const deleteDate = (dateId) => axios.delete(`${baseUrl}/dates/${dateId}.json`);

const updateDate = (dateId, updatedDate) => axios.put(`${baseUrl}/dates/${dateId}.json`, updatedDate);

const getDateById = (dateId) => axios.get(`${baseUrl}/dates/${dateId}.json`);

const randomDate = () => {
  const allDates = getDates();
  const randomDatePick = Math.floor(Math.random() * (allDates.length));
  return allDates[randomDatePick];
};

export default {
  getDates,
  createDate,
  deleteDate,
  updateDate,
  getDateById,
  randomDate,
};
