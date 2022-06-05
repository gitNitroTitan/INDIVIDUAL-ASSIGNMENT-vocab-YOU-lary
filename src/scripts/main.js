// USE WITH FIREBASE AUTH
// import signIn from './helpers/auth/signIn';
import checkLoginStatus from './helpers/checkLoginStatus';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>WELCOME to vocab-YOU-lary!!</h1>
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
    <h2>These are font awesome icons:</h2>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
