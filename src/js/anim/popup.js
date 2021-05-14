export const popUpRequest = function () {
  const [application, overlay, thanks, btnOpen, btnMobileOpen, btnMainOpen] = [
    document.querySelector(".application__block"),
    document.querySelector(".overlay"),
    document.querySelector(".application__thanks"),
    document.querySelector(".list--button"),
    document.querySelector(".list--mobile"),
    document.querySelector(".btn--call"),
  ];
  const arrayBtn = [btnOpen, btnMobileOpen, btnMainOpen];
  arrayBtn.forEach(function (element) {
    element.addEventListener("click", function () {
      application.classList.remove("hidden");
      if (btnMobileOpen !== element) {
        overlay.classList.remove("hidden");

      }else {
        document.body.classList.add("stop--scrolling");
        overlay.classList.add("hidden");

    }
    });
  });

  overlay.addEventListener("click", function () {
    application.classList.add("hidden");
    overlay.classList.add("hidden");
    thanks.classList.add("hidden");
    document.body.classList.remove("stop--scrolling");
  });
};
