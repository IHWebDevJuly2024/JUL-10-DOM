const foxImageElement = document.querySelector("#fox-image");
// now my image element is stored on this variable

console.log(foxImageElement.getAttribute("alt"));

foxImageElement.setAttribute("alt", "cute penguin");

console.log(foxImageElement.getAttribute("alt"));

// Let's store now the button with the id #next-btn
const nextButtonElement = document.querySelector("#next-btn");

// quick way to add a click event to an element
nextButtonElement.onclick = function () {
  console.log("The button has been pressed");
  foxImageElement.setAttribute(
    "src",
    "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15231691/453801468.0.0.1421786380.jpg"
  );
};

// listen to events in the whole document
document.addEventListener("keydown", (event) => {
  console.log("You have pressed the key: ", event.key);
  if (event.key === "b") {
    document.body.style = "background-color: blue";
  } else if (event.key === "r") {
    document.body.style = "background-color: red";
  }
});

// WE CAN CREATE NEW ELEMENTS
const playerElement = document.createElement("div");
// We add the id that we already have styled in the css
playerElement.setAttribute("id", "link");

console.log(playerElement);

// NOW we need to append this element inside the document

document.body.appendChild(playerElement);

// this event listener is tracking all the mouse movements
document.addEventListener("mousemove", (event) => {
  console.log(event);
  // we can store the coordinates of the mouse
  const positionX = event.clientX;
  const positionY = event.clientY;

  // and we are going to add a bit of delay to the movement
  setTimeout(() => {
    // then we are going to change the position of the playerElement based on the mouse position
    playerElement.style.top = `${positionY}px`;
    playerElement.style.left = `${positionX}px`;
  }, 300);
});
