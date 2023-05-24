// init template

class CouroselPage {
  constructor(pageIndex) {
    this.pageIndex = pageIndex;
    this.pageBg = "#FFFFFF"
  }
}
var x = 0;
const pages = [new CouroselPage(1),new CouroselPage(2),new CouroselPage(3)]
const indexTag = document.getElementById("index");
function shiftRight() {
  console.log("Shifting Right");
  if(x == pages.length - 1 ){
    x= 0;
    indexTag.innerHTML= pages[x].pageIndex;
  }else{
    x++;
    console.log(x);
    indexTag.innerHTML= pages[x].pageIndex;
  }
}
function shiftLeft() {
  console.log("Shifting Left");
  if(x == 0){
    x= pages.length - 1;
    indexTag.innerHTML= pages[x].pageIndex;
  }else{
    x--;
    console.log(x);
    indexTag.innerHTML= pages[x].pageIndex;
  }
}
