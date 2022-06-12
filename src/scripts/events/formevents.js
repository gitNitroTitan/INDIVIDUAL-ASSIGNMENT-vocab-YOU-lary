import { showEntry } from '../components/pages/vocab';
import { createEntry, updateEntry } from '../../api/entryData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('submit-entry')) {
      console.warn('CLICKED SUBMIT');
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        date: new Date().toLocaleString(),
        uid
      };
      createEntry(vocabObject).then((vocabArray) => showEntry(vocabArray));
    }

    // CLICK EVENT FOR EDITING AN ENTRY
    if (e.target.id.includes('update-card')) {
      console.warn('CLICKED EDIT ENTRY');
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        date: new Date().toLocaleString(),
        firebaseKey,
        uid
      };

      updateEntry(vocabObject).then(showEntry);
    }
  });
};
export default formEvents;
