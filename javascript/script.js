const keyboard = document.querySelector('.keyboard');
const jawaban = document.querySelector('.jawaban');
const inputSoal = document.querySelector('.input-soal');

const btnHystory = document.getElementById('hystory');
const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');
const sideBar = document.querySelector('.side-bar');
const hystoryBars = document.querySelector('.hystory-bars');

//function click button hystory
btnHystory.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  sideBar.classList.contains('active') ? btnHystory.innerText = 'keyboard' : btnHystory.innerText = 'hystory';
});

// function click button clear hystory
btnClearHystory.addEventListener('click', () => {
  hystoryBars.innerHTML = '';
});

// function hystory bars
hystoryBars.addEventListener('click', e => {
  Calculator.reset === 1 ? resetInput() : undefined;
  if (e.target.dataset.jawaban) {
  Calculator.soalHystory(e.target.dataset.jawaban);
  Calculator.otak();
  updateUi(Calculator.soal, Calculator.hasil);
  } else {
    return;
  }
});

keyboard.addEventListener('click', e => {
  Calculator.reset === 1 ? resetInput() : undefined;
  
  switch (e.target.dataset.type) {
    case 'number':
      Calculator.numbers(e.target.innerText);
      Calculator.otak();
      break;
    case 'titik':
      Calculator.penangananTitik(e.target.innerText);
      break;
    case 'min':
      Calculator.penangananMin(e.target.innerText);
      break;
    case 'operator':
      Calculator.operators(e.target.innerText);
      break;
    case 'samadengan':
      Calculator.samadengan(e.target.innerText);
      break;
  }
  
  updateUi(Calculator.soal, Calculator.hasil);
});

btnClear.addEventListener('click', () => {
  Calculator.soal = [];
  Calculator.hasil = 0;
  inputSoal.value = '';
  jawaban.innerText = '';
});

btnDelete.addEventListener('click', () => {
  if (Array.isArray(Calculator.soal[Calculator.soal.length-1])) {
    if (Calculator.soal[Calculator.soal.length-1].length > 1) {
      Calculator.soal[Calculator.soal.length-1].pop();
    } else {
      Calculator.soal.pop();
    }
  } else {
    Calculator.soal.pop();
    Calculator.otak();
  }

  updateUi(Calculator.soal, Calculator.hasil);
});