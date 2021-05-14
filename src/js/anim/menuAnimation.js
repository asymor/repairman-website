export const menuAnimation = function () {
  const navigationBar = document.querySelector(".nav");
  const handleHover = function (e, opacity, transformScale) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = opacity;
        }
      });
      link.style.transform = transformScale;
    }
  };

  navigationBar.addEventListener("mouseover", function (e) {
    handleHover(e, 0.5, "scale(1.1)");
  });
  navigationBar.addEventListener("mouseout", function (e) {
    handleHover(e, 1, "scale(1)");
  });
};
