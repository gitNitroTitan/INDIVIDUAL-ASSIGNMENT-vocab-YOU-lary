import {
  deleteEntry, getSingleEntry, getEntry, htmlBtn, cssBtn, javascriptBtn, techBtn
} from '../../api/entryData';
import { showEntry } from '../components/pages/vocab';
import addEntryForm from '../components/forms/addVocabForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING AN ENTRY
    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey, uid).then((vocabArray) => showEntry(vocabArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('create-entry')) {
      // console.warn('ADD ENTRY');
      addEntryForm(uid);
    }

    // CLICK EVENT EDITING/UPDATING AN ENTRY
    // 1.pass the entry***
    // 2.pass the entry object to vocab form*** along with uid
    if (e.target.id.includes('update-entry-btn')) {
      // console.warn('EDIT ENTRY', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((vocObj) => addEntryForm(vocObj, uid));
    }
    // FILTER BUTTON EVENTS ON MAIN CONTAINER
    if (e.target.id.includes('clear-btn')) {
      getEntry(uid).then(showEntry);
      // console.warn('CLICKED ALL btn');
    }
    if (e.target.id.includes('html-btn')) {
      htmlBtn(uid).then(showEntry);

      // console.warn('CLICKED html btn', showEntry);
    }
    if (e.target.id.includes('css-btn')) {
      cssBtn(uid).then(showEntry);
    }

    if (e.target.id.includes('javascript-btn')) {
      javascriptBtn(uid).then(showEntry);

      // console.warn('CLICKED javascript btn', showEntry);
    }

    if (e.target.id.includes('tech-btn')) {
      techBtn(uid).then(showEntry);

      // console.warn('CLICKED tech btn', showEntry);
    }
  });
};

export default domEvents;
