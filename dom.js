let a = document.getElementById("headings");
console.dir(a);

let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

let element = document.querySelector("#headings");
console.dir(element);

let elements = document.querySelector("div");
console.dir(elements);

// ques 1
let heading = document.querySelector("h2");
console.dir(heading.innerText);

heading.innerText = heading.innerText + " From apna cllg students";

function isa() {
  let divs = document.querySelectorAll(".box");
  console.log(divs[0]);

  let idx = 1;
  for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
  }
}


