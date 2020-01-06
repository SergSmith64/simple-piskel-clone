function testSum (x, y) {
  return 999;
}

module.exports = {
  testSum
};


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
    ctx.fillRect(x-5, y-5, 10,10);
  }
  // ___отменяем рисование при отжатии клавиши мыши
  canvas.onmouseup = function() {
    canvas.onmousemove = null;
  }
};

// ========================

console.log("DOM-Events___");
let step = 0;
const infoLogger = (event) => {
    step++;
    // __убираю функционал по-умолчания -- переход по ссылке (по href)
    // if (event.target.tagName === 'A') {
    //     event.preventDefault();
    // }
    // _____________________
    console.log(`step - ${step}`, event.currentTarget);
    document.querySelectorAll('li').forEach(tr => li.style.background = '');
    event.target.parentElement.style.background = 'red';
}

document.querySelector('ul').addEventListener('click', infoLogger);

// ==========================
