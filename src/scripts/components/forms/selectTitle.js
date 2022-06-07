import { getEntry } from '../../../api/entryData';
import renderToDOM from '../../helpers/renderToDom';

const selectTitle = (uid, vocabObj) => {
  let domString = `<label for="title">Select a Title</label>
    <select class="form-control" id="title" required>
    <option value="">Select a Title</option>`;

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

    renderToDOM('#select-title', domString);
  });
};

export default selectTitle;
