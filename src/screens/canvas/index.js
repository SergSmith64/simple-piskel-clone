console.log("__ФАЙЛ__INDEX.JS__");

// function testSum (x, y) {
//   return 999;
// }
// module.exports = {
//   testSum
// };

export function myTest() {
  return 999;
}

// ______________________________________________________


// __ инициализация __
var canvas =  document.getElementById('canvasDraw');
var ctx = canvas.getContext('2d');
// __ Размеры всего канваса __
var canvasWidth = 512;
var canvasHeight = 512;
// console.log("__canvasWidth__", canvasWidth);
// ____ делаю дефолтный цвет =ЧЕРНЫЙ=
var newColor = 'black';
console.log("дефолтный ЦВЕТ___", newColor);



// __ ДОБАВЛЯЮ ВЫБОР ЦВЕТА____newColor <-- ввожу цвет из INPUT в HTML__
document.getElementById('colorPrim').oninput = function() {
  newColor =  this.value;
  ctx.fillStyle = newColor;
  // console.log("НОВЫЙ ЦВЕТ___", newColor);
  console.log("ПРИСВОЕННЫЙ ЦВЕТ___", ctx.fillStyle);
}


// __________ Рисую Карандашом ___________
canvas.onmousedown =  function(event) {
  canvas.onmousemove = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.fillRect(x-5, y-5, 10,10);
  }
  // ___отменяем рисование при отжатии клавиши мыши

  canvas.onmouseup = function() {
    canvas.onmousemove = null;
  }
};

// ______ module _ВСЕ СТИРАЮ_______
function canvasClear() {
  // __ПЕРЕКЛЮЧАЮСЬ НА БЕЛЫЙ И ЗАЛИВАЮ__
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  // __ПЕРЕКЛЮЧАЮСЬ НА ЧЕРНЫЙ__
  ctx.fillStyle = 'black';
}
// _________import { canvasClear } from './modclear';_________
// ___  Рисую линию_________

//____ предварительно задаю цвет
// ctx.strokeStyle = "red";
// ___ предварительно задаю толщину
// ctx.lineWidth = "8";

// ctx.moveTo(100, 50);
// ctx.lineTo(400, 500);
// ctx.lineTo(100, 200);
// ctx.stroke();


// ___СЛУШАЮ КЛАВИШИ___
document.addEventListener('keydown', function(e) {
  console.log("__нажал клавишу__ ", e.keyCode);

  if (e.keyCode == 69) {
    // __CLEAR__клавиша лат. "E"raser
    console.log("_СТИРАЮ_КАНВАС_");
    canvasClear();
  }
});


