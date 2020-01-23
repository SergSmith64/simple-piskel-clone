// ______ module _ВСЕ СТИРАЮ_______

export function canvasClear() {
  // __ПЕРЕКЛЮЧАЮСЬ НА БЕЛЫЙ И ЗАЛИВАЮ__
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  // __ПЕРЕКЛЮЧАЮСЬ НА ЧЕРНЫЙ__
  ctx.fillStyle = 'black';
}