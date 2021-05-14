import { init, send } from "emailjs-com";

export const form = function () {
  init("user_0PIgVfwILBhn8W80RP1Ci");
  const [application, overlay, navSwitch, navigation, navCloseBtn, navList] = [
    document.querySelector(".application__block"),
    document.querySelector(".overlay"),
    document.querySelector(".icon--menu"),
    document.querySelector(".nav"),
    document.querySelector(".icon--close"),
    document.querySelector(".nav__list"),
  ];
  const arrayDOM = [overlay, application, navCloseBtn, navList];

  document.querySelectorAll(".input-group").forEach(function (element) {
    element.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!e.target.children[0].value) return;
      const serviceID = "service_sijygg6";
      const templateID = "template_rd4dfdl";

      const templateParams = {
        email: `${e.target.children[0].value}`,
      };
      e.target.children[0].value = "";

      send(serviceID, templateID, templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.querySelector('.application__thanks').classList.remove('hidden');
          overlay.classList.remove('hidden');
          
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
  });

  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "service_sijygg6";
    const templateID = "template_rd4dfdl";

    const templateParams = {
      number: `${document.getElementById("tel").value}`,
      email: `${document.getElementById("email").value}`,
      problem: `${document.querySelector(".form__select").value}`,
    };

    send(serviceID, templateID, templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.querySelector('.application__thanks').classList.remove('hidden');
        overlay.classList.remove('hidden');

      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    arrayDOM.forEach(function (element) {
      if (typeof element.className === "string") {
        element.classList.add("hidden");
      } else {
        element.setAttribute("class", "hidden");
      }
    });
    navSwitch.classList.remove("inactive");
    navigation.classList.add("nav--closed");
    navigation.classList.remove("nav--open");
    document.body.classList.remove("stop--scrolling");
  });
};
