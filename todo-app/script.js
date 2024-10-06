const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchButton = document.querySelector(".row button");

searchButton.addEventListener("click", function (e) {
  if (!inputBox.value) return alert("You must write something!");

  let li = `<li>${inputBox.value} <span>x</span></li>`;

  listContainer.insertAdjacentHTML("beforeend", li);

  inputBox.value = "";

  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }

    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

const renderData = function () {
  listContainer.innerHTML = localStorage.getItem("data");
};

renderData();
