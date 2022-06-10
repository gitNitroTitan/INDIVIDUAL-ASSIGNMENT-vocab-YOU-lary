const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#view2').innerHTML = '';
};

export default clearDom;
