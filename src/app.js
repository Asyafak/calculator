const keyboard = document.querySelector('.keyboard');

const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');

import { InputHandler } from './inputHandler.js';
import { Calculator } from './calculator.js';
import { HystoryManager } from './hystoryManager.js';
import { UIManager } from './UIManager.js';

const inputHandler = new InputHandler();
const calculator = new Calculator();
const hystoryManager = new HystoryManager();
const uiManager = new UIManager();

keyboard.addEventListener('click', inputHandler.keyboardClick);

btnClear.addEventListener('click', inputHandler.inputClear);

btnDelete.addEventListener('click', inputHandler.inputDel);


btnClearHystory.addEventListener('click', hystoryManager.clearHystory);

hystoryManager.btnHystory.addEventListener('click', hystoryManager.innerHystory);

hystoryManager.hystoryBars.addEventListener('click', e => {
  inputHandler.reset === 1 ? hystoryManager.resetInput() : undefined;
  if (e.target.dataset.jawaban) {
    soalHystory(e.target.dataset.jawaban, inputHandler.soal);
    calculator.otak(inputHandler.soal);
    console.log(inputHandler.soal)
    console.log(calculator.hasil)
    uiManager.updateUi(inputHandler.soal, calculator.hasil);
  } else {
    return;
  }
});

const soalHystory = (number, soal) => {
  if (!Array.isArray(soal[soal.length -1])) {
    inputHandler.soal.push([number]);
  } else {
    number < 0 && soal[soal.length-1].length == 1 && soal[soal.length -1][0] == '-' ? inputHandler.soal[inputHandler.soal.length-1] = [number] : (inputHandler.soal.push('+'), inputHandler.soal.push([number]));
  }
}
