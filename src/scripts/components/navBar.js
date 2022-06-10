import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
    <div class="container-fluid">
    <a class="navbar-brand">
      <img src="https://i.pinimg.com/originals/23/79/81/237981a010e7e076e74e1e108e101f36.gif" alt="" width="60" height="80" class="d-inline-block align-text-top">
      vocab-YOU-lary
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item my-2 my-sm-0 active">
              <a class="nav-link" href="#" id="create-entry">
                Create Entry <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item" my-2 my-sm-0>
              <a class="nav-link" href="#" id="all-entries">All Entries</a>
            </li> 
            <li class="nav-item my-2 my-sm-0">
            <div id="login-form-container"></div>
            </li>
            </ul>
            <li class="navbar-text"my-2 my-sm-0></li>
            <div id="logout-button"></div>
          </li>
         
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
