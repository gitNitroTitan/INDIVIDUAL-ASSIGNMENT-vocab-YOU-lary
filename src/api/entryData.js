import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEntry = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/.json`)
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
const createEntry = (uid, payload) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, payload)
    .then((response) => {
      const newPayload = { firebaseKey: response.data.title };
      axios.patch(`${dbUrl}/vocabulary/${response.data.title}.json`, newPayload)
        .then(() => {
          getEntry(uid).then(resolve);
        });
    }).catch(reject);
});

// GET SINGLE ENTRY
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// DELETE ENTRY
const deleteEntry = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`, uid)
    .then(() => {
      getEntry(uid).then((vocabArray) => resolve(vocabArray));
    })
    .catch((error) => reject(error));
});

// EDIT ENTRY
const updateEntry = (vocabObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabulary/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getEntry(uid).then(resolve).then(resolve))
    .catch((error) => reject(error));
});
// FILTER BUTTONS
const allBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((filterEntries) => {
      const allEntries = filterEntries.filter((card) => card.category === 'all');
      resolve(allEntries);
    }).catch((error) => reject(error));
});

const htmlBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((filterEntries) => {
      console.warn(filterEntries);
      const htmlEntries = filterEntries.filter((card) => card.category === 'html');
      resolve(htmlEntries);
    }).catch((error) => reject(error));
});

const cssBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((filterEntries) => {
      console.warn(filterEntries);
      const cssEntries = filterEntries.filter((card) => card.category === 'css');
      resolve(cssEntries);
    }).catch((error) => reject(error));
});

const javascriptBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((filterEntries) => {
      console.warn(filterEntries);
      const jsEntries = filterEntries.filter((card) => card.category === 'javascript');
      resolve(jsEntries);
    }).catch((error) => reject(error));
});

const technologyBtn = (uid) => new Promise((resolve, reject) => {
  getEntry(uid)
    .then((filterEntries) => {
      console.warn(filterEntries);
      const techEntries = filterEntries.filter((card) => card.category === 'tech');
      resolve(techEntries);
    }).catch((error) => reject(error));
});
export {
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
  getSingleEntry,
  allBtn,
  htmlBtn,
  cssBtn,
  javascriptBtn,
  technologyBtn
};
