import { showEntry } from '../components/pages/vocab';
import { createEntry, getEntry, editEntry } from '../../api/entryData';

const formEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('create-entry')) {
      console.warn('CLICKED SUBMIT ENTRY', e.target.id);
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        uid
      };
      createEntry(vocabObject).then((vocabArray) => showEntry(vocabArray));
    }

    // CLICK EVENT FOR EDITING AN ENTRY
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED EDIT ENTRY', e.target.id);
      console.warn(firebaseKey);
      const vocabObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
        uid
      };
      editEntry(vocabObject, uid).then(() => {
        getEntry(uid).then((response) => showEntry(response));
      });
    }
  });
};
export default formEvents;
