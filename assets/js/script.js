document.addEventListener('DOMContentLoaded', function () {
  var totalSlides = document.querySelectorAll('.slider__slide').length;
  var indicatorsContainer = document.querySelector('.slider__indicators');

  for (var i = 1; i <= totalSlides; i++) {
    var indicator = document.createElement('div');
    indicator.classList.add('slider__indicator');
    indicator.setAttribute('data-slide', i);
    indicatorsContainer.appendChild(indicator);
  }

  setTimeout(function () {
    document.querySelector('.slider__wrap').classList.add('slider__wrap--hacked');
  }, 1000);
});

function goToSlide(number) {
  var slides = document.querySelectorAll('.slider__slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slider__slide--active');
  }
  var targetSlide = document.querySelector('.slider__slide[data-slide="' + number + '"]');
  targetSlide.classList.add('slider__slide--active');
}

var nextButtons = document.querySelectorAll('.slider__next, .go-to-next');
nextButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var currentSlide = Number(document.querySelector('.slider__slide--active').getAttribute('data-slide'));
    var totalSlides = document.querySelectorAll('.slider__slide').length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlide(currentSlide);
    document.querySelector('.slider__slide[data-slide="' + currentSlide + '"]').style.opacity = '1';
  });
});


/* document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slider__slide');
  var totalSlides = slides.length;
  var currentSlide = 0;

  for (var i = 0; i < totalSlides; i++) {
    var indicator = document.createElement('div');
    indicator.classList.add('slider__indicator');
    indicator.setAttribute('data-slide', i + 1);
    document.querySelector('.slider__indicators').appendChild(indicator);
  }

  setTimeout(function () {
    document.querySelector('.slider__wrap').classList.add('slider__wrap--hacked');
  }, 1000);

  function goToSlide(number) {
    slides[currentSlide].classList.remove('slider__slide--active');
    currentSlide = (number + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('slider__slide--active');
  }

  var nextButtons = document.querySelectorAll('.slider__next, .go-to-next');
  nextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      goToSlide(currentSlide + 1);
    });
  });
}); */