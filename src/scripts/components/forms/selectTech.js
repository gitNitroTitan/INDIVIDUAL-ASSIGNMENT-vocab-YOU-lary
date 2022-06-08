import { getEntry } from '../../../api/entryData';
import renderToDOM from '../../helpers/renderToDom';

const selectTitle = (uid, vocabObj) => {
  let domString = `<label for="selectTech">Select Tech</label>
    <select class="form-control" id="selectTech" required>
    <option value="">Select Technical Language</option>`;

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

export default selectTitle;
