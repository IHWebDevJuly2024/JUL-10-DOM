const gameStats = {
  score: 0,
};

const gridElements = document.querySelectorAll(".grid-item");
const scoreElement = document.querySelector("#score");

// I want to add an event listener on EACH element

gridElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "green";
    setTimeout(() => {
      element.remove(); // this is going to delete the element
      // then we update the score
      gameStats.score += 1;
      scoreElement.innerText = gameStats.score;
    }, 500);
  });
});
