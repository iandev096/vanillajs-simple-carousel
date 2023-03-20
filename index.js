// Import stylesheets
import './style.css';

const getDataset = (selector) => document.querySelector(selector)?.dataset;
const getSlideIndexLim = () => [
  document.querySelector('[data-slide]:first-of-type').dataset.slide,
  document.querySelector('[data-slide]:last-of-type').dataset.slide,
];
const setActiveSlideIdx = (idx) => {
  getDataset('[data-active-slide]').activeSlide = idx;
};
const getOffsetWidth = () => {
  const carousel = document.querySelector('.carousel');
  return carousel.getBoundingClientRect().width;
};

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const carouselInner = document.querySelector('.carousel-inner');

next.addEventListener('click', () => {
  let activeSlideIndex = getDataset('[data-active-slide]').activeSlide;
  const offsetWidth = getOffsetWidth();
  const [firstIdx, lastIdx] = getSlideIndexLim();

  if (activeSlideIndex >= lastIdx) {
    activeSlideIndex = firstIdx;
  } else {
    activeSlideIndex++;
  }

  setActiveSlideIdx(activeSlideIndex);
  console.table({
    [`${activeSlideIndex} * ${offsetWidth}`]: activeSlideIndex * offsetWidth,
  });
  carouselInner.style.setProperty(
    '--offset-width',
    `${activeSlideIndex * -offsetWidth}px`
  );
});

prev.addEventListener('click', () => {
  let activeSlideIndex = getDataset('[data-active-slide]').activeSlide;
  const offsetWidth = getOffsetWidth();
  const [firstIdx, lastIdx] = getSlideIndexLim();

  if (activeSlideIndex <= firstIdx) {
    activeSlideIndex = lastIdx;
  } else {
    activeSlideIndex--;
  }

  setActiveSlideIdx(activeSlideIndex);
  console.table({
    [`${activeSlideIndex} * ${offsetWidth}`]: activeSlideIndex * offsetWidth,
  });
  carouselInner.style.setProperty(
    '--offset-width',
    `${activeSlideIndex * -offsetWidth}px`
  );
});

// Write Javascript code!
