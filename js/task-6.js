function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const container = document.querySelector("#controls");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const divList = document.querySelector("#boxes");
// const inputElement = document.querySelector("#controls input");


// createBtn.addEventListener("click", () => {
//   const inputValue = Number(inputElement.value);
  
//   if (inputValue < 1 || inputValue > 100) {
//     return alert("Please enter a value between 1 and 100");
//   }

//   createBoxes(inputValue);
//   inputElement.value = ""; 
// });

// destroyBtn.addEventListener("click", destroyBoxes);
