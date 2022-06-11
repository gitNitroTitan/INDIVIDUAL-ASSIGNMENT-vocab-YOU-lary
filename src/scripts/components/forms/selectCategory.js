import { getEntry } from '../../../api/entryData';
import renderToDOM from '../../helpers/renderToDom';

const selectCategory = (uid, vocabObj) => {
  let domString = `<label for="selectCategory">Select Category</label>
    <select class="form-control" id="select-a-category" required>
      <option value="">Select Category</option>
      <option value="javascript">JAVASCRIPT</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="tech">TECH</option>
    </select>`;

  getEntry(uid, vocabObj).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.firebaseKey}" 
            ${vocabObj === vocab.firebaseKey ? 'selected' : ''}>
             
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#category', domString);
  });
};

export default selectCategory;
