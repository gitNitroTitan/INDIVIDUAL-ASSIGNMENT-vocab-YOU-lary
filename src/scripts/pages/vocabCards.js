import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const showVocab = () => {
  clearDom();
  renderToDOM('#view', domString);
};

export default showVocab;
