import { showEntry } from '../components/pages/vocab';
import { getEntry } from '../../api/entryData';
import addEntryForm from '../components/forms/addVocabForm';
import signOut from '../helpers/auth/signOut';

const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL ENTRIES
  document.querySelector('#all-entries').addEventListener('click', () => {
    getEntry(uid).then((vocabArray) => showEntry(vocabArray));
    console.warn('CLICKED ALL ENTRIES');
  });
  document.querySelector('#create-entry').addEventListener('click', () => {
    addEntryForm(uid);

    // getEntry(uid).then((vocabArray) => showEntry(vocabArray));
    console.warn('CLICKED CREATE ENTRY');
  });
};

export default navEvents;
