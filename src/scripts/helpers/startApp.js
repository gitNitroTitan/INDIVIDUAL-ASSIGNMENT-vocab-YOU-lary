import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';
import filterButtons from '../components/buttons/filterButtons';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  filterButtons();
  navEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // TODO: Put all cards on the DOM on App load
};
export default startApp;
