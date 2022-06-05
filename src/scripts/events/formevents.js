const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn('form events');
    // if (e.target.id.includes('submit-entry')) {
    //   const vocabObject = {
    //     title: document.querySelector('#title').value,
    //     image: document.querySelector('#image').value,
    //     price: document.querySelector('#price').value,
    //     description: document.querySelector('#description').value,
    //     sale: document.querySelector('#sale').checked,
    //     author_id: document.querySelector('#author_id').value,
    //   };
    //   createVocab(vocabObject).then((vocabArray) => showVocab(vocabArray));
    // }
  });
};
export default formEvents;
