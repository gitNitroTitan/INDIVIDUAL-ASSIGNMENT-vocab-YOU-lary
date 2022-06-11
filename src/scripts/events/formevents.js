import { showEntry } from '../components/pages/vocab';
import { createEntry, getEntry, updateEntry } from '../../api/entryData';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('submit-entry')) {
      console.warn('CLICKED SUBMIT', e.target.id);
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#select-a-category').value,
        definition: document.querySelector('#definition').value,
        date: new Date().toLocaleString,
        uid
      };
      createEntry(vocabObject).then((vocabArray) => showEntry(vocabArray));
    }

    // // CLICK EVENT FOR EDITING AN ENTRY
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED EDIT ENTRY', e.target.id);
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        date: new Date().toLocaleString,
        firebaseKey,
        uid
      };
      updateEntry(vocabObject).then(() => {
        getEntry(uid).then((response) => showEntry(response));
      });
    }
  });
};
export default formEvents;
