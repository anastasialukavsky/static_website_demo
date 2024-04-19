document.addEventListener('DOMContentLoaded', function () {
  // Your JavaScript code goes here
  const tabs = document.querySelector('.tabs');
  const btns = document.querySelectorAll('.button');
  const articles = document.querySelectorAll('.content');
  const image = document.querySelector('.image-selector img');

  tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id && id !== null) {
      btns.forEach((btn) => {
        btn.classList.remove('live');
      });
      e.target.classList.add('live');
      articles.forEach((article) => {
        article.classList.remove('live');
      });
      const element = document.getElementById(id);
      element.classList.add('live');

      if (id === 'step1') {
        image.src = '/assets/cast1.webp';
        console.log({ img1: image.src });
      } else if (id === 'step2') {
        image.src = '/assets/cast2.webp';
        console.log({ img2: image.src });
      } else if (id === 'step3') {
        image.src = '/assets/cast3.webp';
        console.log({ img3: image.src });
      }
    }
  });
});
