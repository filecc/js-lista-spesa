/* fixing window height on iPhone */
const appHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};
window.addEventListener("resize", appHeight);
appHeight();


function createChild(tagName, classes, text) {
  let newElement = document.createElement(tagName);
  newElement.innerHTML = text;
  addClass(newElement, classes);
  return newElement;
}

function addClass(element, classes) {
  for (_class in classes) {
    element.classList.toggle(classes[_class]);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
