// init template

class CouroselPage {
  constructor(pageIndex) {
    this.pageIndex = pageIndex;
    this.pageBg = "#FFFFFF"
  }
}
const indexTag = document.getElementById("index");
const colorPicker = document.getElementById("pageColor");
var x = 0;
const pages = [new CouroselPage(1),new CouroselPage(2),new CouroselPage(3)]
function shiftRight() {
  console.log("Shifting Right");
  if(x == pages.length - 1 ){
    x= 0;
  }else{
    x++;
  }
  console.log(x);
  indexTag.innerHTML= pages[x].pageIndex;
  colorPicker.value = pages[x].pageBg
  document.body.style.backgroundColor = pages[x].pageBg;
}
function shiftLeft() {
  console.log("Shifting Left");
  if(x == 0){
    x= pages.length - 1;
  }else{
    x--;
  }
  console.log(x);
  indexTag.innerHTML= pages[x].pageIndex;
  colorPicker.value = pages[x].pageBg
  document.body.style.backgroundColor = pages[x].pageBg;
}

colorPicker.addEventListener("input",function () {
  console.log(this.value);
  pages[x].pageBg= this.value;
  document.body.style.backgroundColor = this.value;
})
