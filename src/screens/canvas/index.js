// function testSum (x, y) {
//   return 999;
// }

// module.exports = {
//   testSum
// };


// __ инициализация __
var canvas =  document.getElementById('canvasDraw');
var ctx = canvas.getContext('2d');

// ____ делаю дефолтный цвет =ЧЕРНЫЙ=
var newColor = 'black';
console.log("дефолтный ЦВЕТ___", newColor);

// __ ДОБАВЛЯЮ ВЫБОР ЦВЕТА____newColor <-- ввожу цвет из INPUT в HTML__
document.getElementById('colorPrim').oninput = function() {
  newColor =  this.value;

  ctx.fillStyle = newColor;
  console.log("НОВЫЙ ЦВЕТ___", newColor);
}

// __________ Рисую Карандашом ___________
canvas.onmousedown =  function(event) {
  canvas.onmousemove = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    // ctx.fillRect(x-5, y-5, 10,10);
    ctx.fillRect(x-5, y-5, 10,10);
  }
  // ___отменяем рисование при отжатии клавиши мыши
  canvas.onmouseup = function() {
    canvas.onmousemove = null;
  }
};