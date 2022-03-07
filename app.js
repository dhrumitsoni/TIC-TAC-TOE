
function clicked() {
    console.log("click!");
    var x = document.getElementById("game");
    var y = document.getElementById("splash");

    if (x.style.display == "none") {
        x.style.display = "flex";
        y.style.display = "none";
      } 
    else{
      x.style.display = "none";
    }
        

}

