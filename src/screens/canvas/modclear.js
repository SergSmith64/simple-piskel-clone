// ______ module _ВСЕ СТИРАЮ_______

// __ инициализация __
var canvas =  document.getElementById('canvasDraw');
var ctx = canvas.getContext('2d');

export function canvasClear() {
  console.log("__ФАЙЛ__modCLEAR.JS__");
  // __ПЕРЕКЛЮЧАЮСЬ НА БЕЛЫЙ И ЗАЛИВАЮ__
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 512, 512);
  ctx.beginPath();
  // __ПЕРЕКЛЮЧАЮСЬ НА ЧЕРНЫЙ__
  ctx.fillStyle = 'black';
}