const domEvents = () => {
  console.warn('domEvents');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));
};

export default domEvents;
