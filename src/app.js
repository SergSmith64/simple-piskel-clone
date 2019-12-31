console.log("Empty_File_APP.JS__");

// import * from '../screens/canvas/index';
import { testSum } from './screens/canvas/index';
const summa = require('./screens/canvas/index.js');
console.log('_SUMMA______'+ summa);

// import "./src/screens/canvas/index.scss";
import '../src/screens/canvas/index.scss';


let testSumConsole = testSum();
console.log("__ЭТО_ТЕСТОВАЯ_СУММА___" + testSumConsole);