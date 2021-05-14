import Typewriter from "typewriter-effect/dist/core";

export const typeWriter = function () {
  let app = document.getElementById("type--animation");

  let typewriter = new Typewriter(app, {
    loop: false,
    delay: 70,
    cursor: "|",
  });

  typewriter
    .typeString("We will solve your problems")
    .pauseFor(1000)
    .deleteAll()
    .typeString("We will fix the sewer, ")
    .typeString("heating and plumbing!")
    .pauseFor(1000)
    .start();
};
