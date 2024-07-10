console.log("JS file running");

console.log(document.body);

document.body.innerText = "Hello this is a text";

/* setTimeout(() => {
  document.body.innerHTML = `
        <h1>Hello this is an H1 created with JS</h1>
        <p>this is a paragraph</p>
    `;
}, 3000); */

let counter = 0;
setInterval(() => {
  document.body.innerHTML = `
        <h1>This is the counter ${counter}</h1>
    `;
  counter++;
}, 1000);
