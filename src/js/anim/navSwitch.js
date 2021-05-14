const [navSwitch, navigation, navCloseBtn, navList] = [
  document.querySelector(".icon--menu"),
  document.querySelector(".nav"),
  document.querySelector(".icon--close"),
  document.querySelector(".nav__list"),
];

const navClosed = function () {
  navigation.classList.add("nav--closed");
  navigation.classList.remove("nav--open");
  navCloseBtn.classList.add("inactive");
  navSwitch.classList.remove("inactive");
  navList.classList.add("inactive");
  document.body.classList.remove("stop--scrolling");
};

const navOpen = function() {
  navigation.classList.remove("nav--closed");
  navigation.classList.add("nav--open");
  navCloseBtn.classList.remove("inactive");
  navSwitch.classList.add("inactive");
  navList.classList.remove("inactive");
  document.body.classList.add("stop--scrolling");
}

const switchElements = function () {
  navSwitch.addEventListener("click", navOpen);
  navCloseBtn.addEventListener("click", navClosed);

};

export { switchElements, navClosed };
