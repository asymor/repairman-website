export const applyAnim = function () {
  const [
    application,
    btnOpen,
    overlay,
    btnOpenMobile,
    btnMainOpen,
    btnRequest,
    arrows,
  ] = [
    document.querySelector(".application__block"),
    document.querySelector(".btn--primary"),
    document.querySelector(".overlay"),
    document.querySelector(".list--mobile"),
    document.querySelector(".btn--call"),
    document.querySelector(".btn--request"),
    document.querySelectorAll(".link--body"),
  ];

  arrows.forEach(function (element) {
    element.addEventListener("click", function (e) {
      const parentArrow = e.target.parentElement;
      arrows.forEach(function (el) {
        if (el.parentElement.className.includes("offer--active")) {
          el.classList.remove("link-arrow--hidden");
          el.parentElement.children[2].style.overflow = "hidden";
          el.parentElement.classList.remove("offer--active");
        }
      });
      parentArrow.children[2].style.overflow = "initial";
      e.target.classList.add("link-arrow--hidden");
      e.target.parentElement.classList.add("offer--active");
    });
  });

  [btnOpen, btnOpenMobile, overlay, btnMainOpen, btnRequest].forEach(
    (element) =>
      element.addEventListener("click", function () {
        if (element !== overlay && element !== btnRequest) {
          application.style.transform =
            element === btnOpenMobile
              ? "translateY(0rem)"
              : "translateY(105rem)";
          application.style.opacity = "1";
        } else {
          application.style.transform = "translateY(-100rem)";
          application.style.opacity = "0";
        }
      })
  );
};
