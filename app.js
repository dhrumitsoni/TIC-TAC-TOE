var count = 1;
let gameStatus = [ , , , , , , , ,]
const boxes = document.getElementsByClassName("box");
const win = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8],[2,4,6]]

function play() 
{
  var x = document.getElementById("game");
  var y = document.getElementById("splash");
  
  x.style.display = "flex";
  y.style.display = "none";
}

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

for (var i = 0; i < 9; i++) 
{
  boxes[i].onclick = function(e) 
  {
    let idx = parseInt(this.id.slice(6,7));
    
    if( document.getElementById(this.id).innerHTML === '')
    {
      if (count%2 == 0) 
      {
        document.getElementById(this.id).innerHTML = 'X';
        gameStatus.splice(idx,1,'X');
        count += 1;
      }
      else 
      {
        document.getElementById(this.id).innerHTML = 'O';
        gameStatus.splice(idx,1,'O');
        count += 1;
      }
    }
  }
}

