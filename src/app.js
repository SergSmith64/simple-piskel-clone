console.log("ВХОДНОЙ_ФАЙЛ_APP.JS______");

import './screens/canvas/images/favicon.ico';
import '../src/screens/canvas/index.scss';

// import * from './screens/canvas/index';

import { myTest } from './screens/canvas/index';
const indexLoad = myTest();
console.log('___index-Load___= ', indexLoad);

// const summa = require('./screens/canvas/index.js');
// console.log('_SUMMA______'+ summa);



// let testSumConsole = testSum();
// console.log("__ЭТО_ТЕСТОВАЯ_СУММА___" + testSumConsole);


// _____________ TEST __________ APP.TEST.JS ___________
// const { indexLoad } = require('../src/screens/canvas/index');

// test('test index', () => {
//   const mockFn = jest.fn();
//   expect(mockFn).toBeDefined();
// });