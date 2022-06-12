import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addEntryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <br>
      <label for="cat-label">Category</label>
      <div class="form-group" id="select-form">
      <select id="category" class="form-select" aria-label="Default select example" >${obj.category || ''}
        <option selected>Select Menu</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="JAVASCRIPT">JAVASCRIPT</option>
        <option value="TECH">TECH</option>
      </select>
      </div>
     <br>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
