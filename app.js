var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("myBar");
    var counter = document.getElementsByClassName("percent");
    var width = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        for (let i = 0; i < elem.length; i++) {
          elem[i].style.width = width + "%";
          counter[i].style.right = width / 2 + "%";
          counter[i].innerHTML = width + "%";
        }
      }
    }
  }
}
