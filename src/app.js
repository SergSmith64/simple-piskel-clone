console.log("ВХОДНОЙ_ФАЙЛ_APP.JS______");

import './screens/canvas/images/favicon.ico';

// import * from './screens/canvas/index';
import { testSum } from './screens/canvas/index';
const summa = require('./screens/canvas/index.js');
console.log('_SUMMA______'+ summa);

// import "./src/screens/canvas/index.scss";
import '../src/screens/canvas/index.scss';


let testSumConsole = testSum();
console.log("__ЭТО_ТЕСТОВАЯ_СУММА___" + testSumConsole);
