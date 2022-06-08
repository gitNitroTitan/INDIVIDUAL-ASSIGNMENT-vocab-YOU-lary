import { getEntry } from '../../../api/entryData';
import renderToDOM from '../../helpers/renderToDom';

const selectCategory = (uid, vocabObj) => {
  let domString = `<label for="selectCategory">Select Category</label>
    <select class="form-control" id="selectCategory" required>
    <option value="">Select Category</option>`;

  getEntry(uid, vocabObj).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.firebaseKey}" 
            ${vocabObj === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.title}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-tech', domString);
  });
};

export default selectCategory;
