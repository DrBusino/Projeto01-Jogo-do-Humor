const pics = [
  "./Assets/Img/normal.jpg",
  "./Assets/Img/luisSurpreso.jpg",
  "./Assets/Img/feliz.jpg",
  "./Assets/Img/irritado.jpg",
  "./Assets/Img/confuso.jpg",
];

const luisState = ["Normal", "Surpreso", "Feliz", "Irritado", "Confuso"];

const btnImg = document.querySelector("#myBtn");

let index = 0;
 document.getElementById("changePic").src = pics[index];
 document.getElementById("luisState").textContent = luisState[index];

btnImg.addEventListener("click", function () {
  if (index > 3) {
    index = 0;
  } else {
    index++;
  }

  document.getElementById("changePic").src = pics[index];
  document.getElementById("luisState").textContent = luisState[index];
});
