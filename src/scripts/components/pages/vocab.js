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
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
    </div><br>`;
    });
    renderToDOM('#view', domString);
  } else {
    emptyEntry();
  }
};

export { showEntry, emptyEntry };
