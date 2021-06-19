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
