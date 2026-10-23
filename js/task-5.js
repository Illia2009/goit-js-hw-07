function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanClr = document.querySelector('.color');

const BtnClr = document.querySelector('.change-color');
BtnClr.addEventListener('click', (event) => { 
  const newClr = getRandomHexColor();

  body.style.backgroundColor = newClr;
  spanClr.textContent = newClr;

});