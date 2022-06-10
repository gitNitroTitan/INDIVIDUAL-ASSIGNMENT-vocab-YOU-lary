import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
    <div id="filter-container"></div>
    <div id="navigation"></div>  
    <div id="form-container"></div>
    <div id="view"></div>
    <div id="view2"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
