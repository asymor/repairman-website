export const revealSections = function () {
  const [allServices, offers, slider, testimonials, footer] = [
      document.querySelectorAll(".services__block"),
      document.querySelector(".offers"),
      document.querySelector(".photo__container"),
      document.querySelector(".testimonial__container"),
      document.querySelector(".footer__block"),
    ],
    elementsForReveal = [offers, slider, testimonials, footer];

  const revealServices = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateX(0rem)";
    observer.unobserve(entry.target);
  };

  const servicesObserver = new IntersectionObserver(revealServices, {
    root: null,
    threshold: 0.2,
  });

  allServices.forEach(function (service) {
    servicesObserver.observe(service);
    service.style.opacity = 0;
    service.dataset.sort !== "0"
      ? (service.style.transform = "translateX(-8rem)")
      : (service.style.transform = "translateX(8rem)");
  });

  elementsForReveal.forEach(function (element) {
    servicesObserver.observe(element);
    if (!element.className.includes("photo__container")) {
      element.style.opacity = 0;
      element.style.transform = "translateY(8rem)";
    } else {
      element.style.transform = "translateX(-8rem)";
    }
  });
};
