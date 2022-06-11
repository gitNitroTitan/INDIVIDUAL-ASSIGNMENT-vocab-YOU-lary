import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyEntry = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#view', domString);
};

const showEntry = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((obj) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.category}</h6>
        <p class="card-text">${obj.definition}</p>
        <p class="card-date">${obj.date}</p>
        <i id="update-entry-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-entry-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div><br>`;
    });
    renderToDOM('#view', domString);
  } else {
    emptyEntry();
  }
};

export { showEntry, emptyEntry };
