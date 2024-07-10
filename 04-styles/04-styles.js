const heroSectionElement = document.querySelector("#hero-section");

// we can modify styles directly in the DOM like this:
// heroSectionElement.style = "background-color: red";
// this adds inline styling

heroSectionElement.className = "card";

// with the classList we get also an array like with a list of classes
console.log(heroSectionElement.classList);

heroSectionElement.classList.remove("card");

heroSectionElement.classList.add("card");

console.log(heroSectionElement.classList.contains("card"));

heroSectionElement.classList.add("black-card");

setInterval(() => {
  if (heroSectionElement.classList.contains("card")) {
    heroSectionElement.className = "black-card";
  } else {
    heroSectionElement.className = "card";
  }
}, 3000);

// To select elements (OLD SCHOOL)

/*
document.getElementById("thenameoftheID");

document.getElementsByClassName("classnamehere");

document.getElementsByTagName("h1");
*/
