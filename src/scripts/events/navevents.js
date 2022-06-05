import signOut from '../helpers/auth/signOut';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navEvents;
