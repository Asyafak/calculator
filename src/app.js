const keyboard = document.querySelector('.keyboard');

const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');

import { InputHandler } from './inputHandler.js';
import { Calculator } from './calculator.js';
import { HystoryManager } from './hystoryManager.js';
import { UIManager } from './uiManager.js';

const inputHandler = new InputHandler();
const calculator = new Calculator();
const hystoryManager = new HystoryManager();
const uiManager = new UIManager();

keyboard.addEventListener('click', e => {
  uiManager.reset === 1 ? uiManager.resetInput() : undefined;
  
    switch (e.target.dataset.type) {
      case 'number':
        inputHandler.numbersHandler(e.target.innerText);
        calculator.otak(inputHandler.soal);
        break;
      case 'titik':
        inputHandler.periodHandler(e.target.innerText);
        break;
      case 'min':
        inputHandler.minHandler(e.target.innerText);
        break;
      case 'operator':
        inputHandler.operatorsHandler(e.target.innerText);
        break;
      case 'equals':
        const tagBaru = uiManager.equals(calculator.hasil, inputHandler.soal);
        
        uiManager.infoEquals === 'berhasil' ? inputHandler.soal = [] : undefined;
        
        hystoryManager.hystoryBars.insertBefore(tagBaru, hystoryManager.hystoryBars.firstChild);
        break;
    }
  
    uiManager.updateUi(inputHandler.soal, calculator.hasil);
});

btnClear.addEventListener('click', () => {
  inputHandler.soal = [];
  calculator.hasil = 0;
  uiManager.inputSoal.value = '';
  uiManager.jawaban.innerText = '';
});

btnDelete.addEventListener('click', () => {
  if (Array.isArray(inputHandler.soal[inputHandler.soal.length-1])) {
    inputHandler.soal[inputHandler.soal.length-1].length > 1 ? inputHandler.soal[inputHandler.soal.length-1].pop() : inputHandler.soal.pop();
    calculator.otak(inputHandler.soal);
  } else {
    inputHandler.soal.pop();
  }

  uiManager.updateUi(inputHandler.soal, calculator.hasil);
});


btnClearHystory.addEventListener('click', hystoryManager.clearHystory);

hystoryManager.btnHystory.addEventListener('click', hystoryManager.innerHystory);

hystoryManager.hystoryBars.addEventListener('click', e => {
  inputHandler.reset === 1 ? hystoryManager.resetInput() : undefined;
  if (e.target.dataset.jawaban) {
    soalHystory(e.target.dataset.jawaban, inputHandler.soal);
    calculator.otak(inputHandler.soal);
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
