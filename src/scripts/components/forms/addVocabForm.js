import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';
import selectCategory from './selectCategory';

const addEntryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id= "category" placeholder= "Select Category">
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectCategory(`${obj.category} || ''}`);
};

export default addEntryForm;
