import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEntry = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE ENTRY
const createEntry = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, vocabObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, payload)
        .then(() => {
          getEntry(vocabObj.uid).then(resolve);
        });
    }).catch(reject);
});

// GET SINGLE ENTRY
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// EDIT ENTRY
const updateEntry = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabulary/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getEntry(vocabObj).then(resolve))
    .catch(reject);
});
// DELETE ENTRY
const deleteEntry = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then(() => {
      getEntry(uid).then((vocabArray) => resolve(vocabArray));
    })
    .catch((error) => reject(error));
});

// HTML BUTTON FILTER
const htmlBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((indCard) => {
      const getHtml = indCard.filter((card) => card.category === 'HTML');
      resolve(getHtml);
    })
    .catch(reject);
});
const cssBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((indCard) => {
      const getCss = indCard.filter((card) => card.category === 'CSS');
      resolve(getCss);
    })
    .catch(reject);
});
const javascriptBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((indCard) => {
      const getJavascript = indCard.filter((card) => card.category === 'JAVASCRIPT');
      resolve(getJavascript);
    })
    .catch(reject);
});
const techBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((indCard) => {
      const getTech = indCard.filter((card) => card.category === 'TECH');
      resolve(getTech);
    })
    .catch(reject);
});

export {
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
  getSingleEntry,
  htmlBtn,
  cssBtn,
  javascriptBtn,
  techBtn
};
