const t = document.querySelector(".t");
const a = document.querySelector(".a");
const n = document.querySelector(".n");
const ya = document.querySelector(".ya");
const defT = () => {
  t.style.width = "400px";
};
const defA = () => {
  a.style.width = "400px";
};
const defN = () => {
  n.style.width = "400px";
};
const defYa = () => {
  ya.style.width = "400px";
};

t.addEventListener("click", defT);
a.addEventListener("click", defA);
n.addEventListener("click", defN);
ya.addEventListener("click", defYa);

let growWidth = 0;
let growHeight = 0;
function growBlock() {
  growWidth = growWidth + 10;
  growHeight = growHeight + 10;
  document.querySelector(".congratulations").style.width = growWidth + "px";
  document.querySelector(".congratulations").style.height = growHeight + "px";
  if (growHeight > 250) {
    growHeight = 250;
  }
  if (growWidth > 380) {
    return true;
  }

  document.querySelector(".congratulations").onclick = growBlock;
  setTimeout(growBlock, 10);
}
document.querySelector(".congratulations").onclick = growBlock;
