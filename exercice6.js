const changeColour = (colour) => {
  const element = document.querySelector(`[data-colour=${colour}]`);
  element.childNodes[3].style.color = colour;
};

changeColour("red");
changeColour("green");
changeColour("blue");
