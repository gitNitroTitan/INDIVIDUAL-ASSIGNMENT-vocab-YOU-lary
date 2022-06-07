// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/checkLoginStatus';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>WELCOME to vocab-YOU-lary!!</h1>
   
  `;
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
