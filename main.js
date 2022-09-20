const clickableButton = document.getElementById("click");
const populatedColor = document.querySelector(".finalColor");
const hex = document.getElementById("hexColor");
let colors = ["red", "green", "blue", "orange", "yellow"];
let hexColors = ["#008000", "#800080", "#FF0000", "#808080", "#0000FF"];
let hexFlag;

function colorFlipper(e) {
  hexFlag = false;
  const styles = e.currentTarget.classList;
  console.log(styles);
  if (styles.contains("Hex")) {
    hexFlag = true;
  }
  let randomColor = getRandomColor();
  let color;
  if (hexFlag) {
    color = hexColors[randomColor];
  } else {
    color = colors[randomColor];
  }
  document.body.style.backgroundColor = color;
  populatedColor.textContent = color;
}

clickableButton.addEventListener("click", colorFlipper);
hex.addEventListener("click", colorFlipper);

function getRandomColor() {
  if (hexFlag) {
    return Math.floor(Math.random() * hexColors.length);
  } else {
    return Math.floor(Math.random() * colors.length);
  }
}
