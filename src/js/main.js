import { poz1, poz23, poz4, poz56, poz7, poz8, poz9 } from "./modules/dataCont";
import { dataRuny } from "./modules/dataRuny";
import { dataAsov } from "./modules/dataAsov";
const arrCont = [poz1, poz23, poz23, poz4, poz56, poz56, poz7, poz8, poz9];

const modal = document.getElementById("myModal");
const btn = document.querySelectorAll(".item");
const btnRuny = document.querySelectorAll(".row-item");
const btnAsov = document.querySelectorAll('.item-asov');
const span = document.getElementsByClassName("close")[0];

btn.forEach((el) => {
  el.onclick = function () {
    modal.style.display = "block";
    
    const selected = +el.dataset.num;
    document.querySelector('.modal-title').innerHTML = arrCont[selected][0].title;
    document.querySelector('.modal-text').innerHTML = arrCont[selected][0].text;   
  };
});

btnRuny.forEach((el) => {
   el.onclick = function(){
      modal.style.display = "block";

      const selected2 = +el.dataset.item;
      document.querySelector('.modal-title').innerHTML = dataRuny[selected2].title;
      document.querySelector('.modal-text').innerHTML = dataRuny[selected2].text;
   }
})

btnAsov.forEach((el) => {
   el.onclick = function(){
      modal.style.display = "block";

      const selected3 = +el.dataset.asov;
      document.querySelector('.modal-title').innerHTML = dataAsov[selected3].title;
      document.querySelector('.modal-text').innerHTML = dataAsov[selected3].text;
   }
})


span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
