import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addEntryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title"  value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id="category">
        <label for="image">Category</label>
          <select class="form-control" id="category">
          <option selected>Select Category</option>
          <option value="javascript">JAVASCRIPT</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          value="${obj.category || ''}" required
          </select>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
