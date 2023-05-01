import { poz1, poz23, poz4, poz56, poz7, poz8, poz9 } from "./modules/dataCont";
const arrCont = [poz1, poz23, poz23, poz4, poz56, poz56, poz7, poz8, poz9];

const modal = document.getElementById("myModal");
const btn = document.querySelectorAll(".item");
const span = document.getElementsByClassName("close")[0];

btn.forEach((el) => {
  el.onclick = function () {
    modal.style.display = "block";
    
    const selected = +el.dataset.num;
    document.querySelector('.modal-title').innerHTML = arrCont[selected][0].title;
    document.querySelector('.modal-text').innerHTML = arrCont[selected][0].text;
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};