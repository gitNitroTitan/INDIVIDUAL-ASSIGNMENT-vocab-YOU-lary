import { showEntry } from '../components/pages/vocab';
import {
  htmlBtn, cssBtn, javascriptBtn, technologyBtn
} from '../../api/entryData';

const filterButtonEvents = (uid) => {
  document.querySelector('#html-btn').addEventListener('click', () => {
    console.warn('clicked html');
    htmlBtn(uid).then((entryArray) => showEntry(entryArray));
  });
  document.querySelector('#css-btn').addEventListener('click', () => {
    cssBtn(uid).then((entryArray) => showEntry(entryArray));
  });
  document.querySelector('#javascript-btn').addEventListener('click', () => {
    javascriptBtn(uid).then((entryArray) => showEntry(entryArray));
  });
  document.querySelector('#tech-btn').addEventListener('click', () => {
    technologyBtn(uid).then((entryArray) => showEntry(entryArray));
  });
};
export default filterButtonEvents;
