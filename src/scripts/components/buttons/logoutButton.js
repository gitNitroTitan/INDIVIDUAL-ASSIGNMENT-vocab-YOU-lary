import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../../helpers/clearDom';

const signMeOut = () => {
  clearDom();
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
