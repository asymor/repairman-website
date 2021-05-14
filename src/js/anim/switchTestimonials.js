export const switchTestimonials = function () {
  const [btnSwitch, testimonial] = [
    document.querySelectorAll(".link--gallery"),
    document.querySelectorAll(".testimonial"),
  ];
  btnSwitch.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const parentBtn = e.target.parentElement.parentElement;
      const parentBtnLow = e.target.parentElement;
      testimonial.forEach(function (element) {
        if (element.className.includes("testimonial--active")) {
          element.classList.remove("testimonial--active");
          element.children[1].classList.remove("testimonial__text--active");
          element.children[1].children[2].classList.remove("hidden");
        }
      });
      parentBtn.classList.add("testimonial--active");
      parentBtnLow.classList.add("testimonial__text--active");
      e.target.classList.add("hidden");
    })
  );
};
