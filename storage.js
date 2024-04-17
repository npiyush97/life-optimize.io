const form = document.querySelector("form");
const ul = document.querySelector(".todo-list");
const button = document.querySelector("button");
const input = document.getElementById("item");
let itemArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.dataset.idx = Math.floor((Math.random() * 1000) * (Math.random() * 1000))
  li.className = 'todo'
  ul.appendChild(li);
};

ul.addEventListener('click', (e) => {
  let idx = e.target.dataset.idx
  const lis = document.querySelectorAll('.todo')
  lis.forEach(li => {
    if (idx === li.dataset.idx) {
      li.classList.toggle('underline')
    }
  })
})

ul.addEventListener('dblclick', (e) => {
  let idx = e.target.dataset.idx
  const lis = document.querySelectorAll('.todo')
  lis.forEach(li => {
    if (idx === li.dataset.idx) {
      ul.removeChild(li)
    }
  })
})



form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim().length > 0) {
    itemArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemArray));
    liMaker(input.value);
  }
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});




button.addEventListener("click", () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemArray = [];
});
