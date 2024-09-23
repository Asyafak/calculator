const keyboard = document.querySelector('.keyboard');

const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');

import { InputHandler } from './inputHandler.js';
import { Calculator } from './calculator.js';
import { HystoryManager } from './hystoryManager.js';

const inputHandler = new InputHandler();
const calculator = new Calculator();
const hystoryManager = new HystoryManager();

keyboard.addEventListener('click', inputHandler.keyboardClick);

btnClear.addEventListener('click', inputHandler.inputClear);

btnDelete.addEventListener('click', inputHandler.inputDel);

hystoryManager.hystoryBars.addEventListener('click', hystoryManager.barsClick);

btnClearHystory.addEventListener('click', hystoryManager.clearHystory);

hystoryManager.btnHystory.addEventListener('click', hystoryManager.innerHystory);