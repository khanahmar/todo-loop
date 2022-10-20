// Array of todo's
let list = [];

// Targating data
const data = document.getElementById("data");
const input = document.getElementById("input");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const icon = document.getElementById("icon");
let delIcon;

// Making functions

const loadData = () => {
  list = JSON.parse(localStorage.getItem("list"));
  console.log(list);
  data.innerHTML = "";
  list.map((li, index) => {
    data.innerHTML += `<li  key=${index}>${li}<i class="bi bi-file-earmark-x-fill"></i></li>`;
  });
};

// adding todo to list

input.addEventListener("keydown", (e) => {
  if (input.value === "" && e.target === "Enter") {
    input.value = "Enter something todo";
  } else if (e.key === "Enter") {
    list.push(input.value);
    myStorage();
    loadData();
    input.value = "";
  }
});

clear.addEventListener("click", (e) => {
  list = [];
  data.innerText = "";
});

del.addEventListener("click", (e) => {
  list.pop();
  myStorage();
  loadData();
});

// Calling function
window.addEventListener("load", loadData());

data.addEventListener("click", (e) => {
  const key = e.target.getAttribute("key");
  list.splice(key, 1);
  myStorage();
  loadData();
});

icon.addEventListener("click", (e) => {
  list.push(input.value);
  myStorage();
  loadData();
  input.value = "";
});

// Adding localstorage

function myStorage() {
  localStorage.setItem("list", JSON.stringify(list));
}
