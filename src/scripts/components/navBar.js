// import giphy from './images/giphy.gif';
import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
    <div class="container-fluid">
    <a class="navbar-brand">
      <img src="#" alt="" width="60" height="80" class="d-inline-block align-text-top">
      vocab-YOU-lary
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="create-entry">
                Create Entry <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-entries">All Entries</a>
            </li> 
            <li class="navbar-text"></li>
            <div id="logout-button"></div>
          </li>
          <li class="nav-item">
          <div id="login-form-container"></div>
          </li>
          </ul>
         
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
