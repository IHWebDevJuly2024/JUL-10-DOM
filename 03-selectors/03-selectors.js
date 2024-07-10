// SELECTOR

// 1 SELECT THE ELEMENT
// in a query selector we use the same selectors that we use in CSS
const textBox = document.querySelector(".text-box");
// Now the value of this variable is the html element
// The querySelector selects only the first occurrence. In this case is the first element with class .text-box

// so I can modify this element:
textBox.innerText = "New text";

// I can also add HTML
textBox.innerHTML = "<div>This is a div inside the P</div>";

// If I want to select all the elements I use querySelectorAll

const liElements = document.querySelectorAll("li");

// this gives me an array like object  (node list)
console.log(liElements);

// in case I want only one of them
const secondLiElement = liElements[1];
// forEach loop is available for a Node list. But not the other array methods
liElements.forEach((element) => {
  // this way I can modify all the li elements at the same time
  element.innerText = "Python";
});

// If we use innerHTML we can pass HTML code.
// BUT innerText is just text, is not going to interpret the HTML
