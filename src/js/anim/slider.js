export const slider = function () {
  const [slidesImages, slidesTexts, btnLeft, btnRight] = [
    document.querySelectorAll(".slide"),
    document.querySelectorAll(".slide__text"),
    document.querySelector(".gallery__paginator--left"),
    document.querySelector(".gallery__paginator--right"),
  ];
  const maxSlideImages = slidesImages.length;
  let currentSlide = 0;

  const goToSlide = function (slide) {
    console.log(slide);
    slidesImages.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    slidesTexts.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlideImages - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  goToSlide(0);

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlideImages - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
};
