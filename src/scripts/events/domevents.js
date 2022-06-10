import { deleteEntry, getSingleEntry, getEntry } from '../../api/entryData';
import { showEntry } from '../components/pages/vocab';
import addEntryForm from '../components/forms/addVocabForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING AN ENTRY
    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then((vocabArray) => showEntry(vocabArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('create-entry')) {
      console.warn('ADD ENTRY');
      addEntryForm(uid);
    }

    // CLICK EVENT EDITING/UPDATING AN ENTRY
    // 1.pass the entry***
    // 2.pass the entry object to vocab form*** along with uid
    if (e.target.id.includes('update-entry')) {
      console.warn('EDIT ENTRY', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((vocabObj) => addEntryForm(uid, vocabObj));
    }

    // CLICK EVENT FOR VIEW VOCAB DETAILS
    if (e.target.id.includes('view-entry-btn')) {
      console.warn('clicked view-entry-btn');
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(e.target.id);
      getEntry(firebaseKey).then((vocabObject) => showEntry(vocabObject));
    }
  });
};

export default domEvents;
