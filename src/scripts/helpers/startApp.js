import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import filterButtons from '../components/buttons/filterButtons';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar();
  filterButtons();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // TODO: Put all cards on the DOM on App load
};
export default startApp;
