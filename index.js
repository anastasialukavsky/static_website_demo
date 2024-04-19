const bgImageEl = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.scrollY / 800;
  bgImageEl.style.backgroundSize = 160 - window.scrollY / 12 + '%';
}

const btnEl = document.querySelector('.watch-btn');
const closeIconEl = document.querySelector('.cancel-icon');
const trailerContainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

btnEl.addEventListener('mouseover', (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty('--xPos', x + 'px');
  btnEl.style.setProperty('--yPos', y + 'px');
});

btnEl.addEventListener('click', () => {
  trailerContainerEl.classList.remove('active');
});

closeIconEl.addEventListener('click', () => {
  trailerContainerEl.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});



