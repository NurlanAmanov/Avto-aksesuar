const sliderContainer = document.querySelector('.slides-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-arrow-prev');
const nextButton = document.querySelector('.slider-arrow-next');

let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = sliderItems[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Son slayta gelince başa döner.
  }
  updateSliderPosition();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = sliderItems.length - 1; // Başa gelince sona döner.
  }
  updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition); // Pencere boyutu değişirse slider güncellenir.
let autoSlide = setInterval(() => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}, 3000); // Her 3 saniyede bir geçiş yapar

sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(autoSlide); // Fare ile üzerine gelindiğinde otomatik kaydırmayı durdurur
});

sliderContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    if (currentIndex < sliderItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  }, 3000);
});