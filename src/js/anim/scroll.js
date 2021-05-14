import { navClosed } from "./navSwitch.js";

export const scroll = function () {
  const [main, gallery, testimonial, contacts, navBtns] = [
    document.querySelector(".main"),
    document.querySelector(".photo__container"),
    document.querySelector(".testimonial__container"),
    document.querySelector(".footer"),
    document.querySelectorAll(".list__item--scroll"),
  ];

  navBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      navClosed();
      [main, gallery, testimonial, contacts, main][index].scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
