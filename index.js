// Array of todo's
let list = [
  "Reading book",
  "Going to school",
  "playing cricket",
  "going to gym",
];

// Targating data
const data = document.getElementById("data");
const input = document.getElementById("input");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

// Making functions
const loadData = () => {
  data.innerHTML = "";
  list.map((li, index) => {
    data.innerHTML += `<li key=${index}>${li}</li>`;
  });
};

// adding todo to list
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    list.push(input.value);
    loadData();
    input.value = "";
  }
});

clear.addEventListener("click", (e) => {
  list = [];
  data.innerText = "No item";
});

del.addEventListener("click", (e) => {
  list.pop();
  console.log(list);

  loadData();
});

// Calling function
window.addEventListener("load", loadData());

// For loop

// for (let i = 0; i < list.length; i++) {
//   data.innerHTML += `<li>${list[i]}</li>`;
// }

// While loop

// let i = 0;
// while (i < list.length) {
//   data.innerHTML += `<li>${list[i]}</li>`;
//   i++;
// }

// forEach loop

// list.forEach((li) => {
//   data.innerHTML += `<li>${li}</li>`;
// });

// map loop

// Task
/*
Hint. window ka eventlistner "load"  
1. make the code simpler
*/

data.addEventListener("click", (e) => {
  const key = e.target.getAttribute("key");
  list.splice(key, 1);
  loadData();
});
