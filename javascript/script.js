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
  if (isiCalculator.reset == 1) {
    isiCalculator.reset = 0;
    inputSoal.classList.remove('active');
    jawaban.classList.remove('active');
  }
  if (e.target.classList.contains('hystory-bars')) {
    return;
  }
  isiCalculator.soalHystory(e.target.classList[1]);
  isiCalculator.otak();
  updateUi(isiCalculator.soal, isiCalculator.hasil);
});

keyboard.addEventListener('click', e => {
  if (isiCalculator.reset == 1) {
    isiCalculator.reset = 0;
    inputSoal.classList.remove('active');
    jawaban.classList.remove('active');
  }

  if (e.target.classList.contains('number') || e.target.classList.contains('min')) {
    isiCalculator.numbers(e.target.innerText);
    isiCalculator.otak();
  } else if (e.target.classList.contains('operator')) {
    isiCalculator.operators(e.target.innerText);
  }
  
  updateUi(isiCalculator.soal, isiCalculator.hasil);

  if (e.target.classList.contains('samadengan')) {
    isiCalculator.samadengan();
  }
});

btnClear.addEventListener('click', () => {
  isiCalculator.soal = [];
  isiCalculator.hasil = 0;
  inputSoal.value = '';
  jawaban.innerText = '';
});

btnDelete.addEventListener('click', () => {
  if (Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1])) {
    if (isiCalculator.soal[isiCalculator.soal.length-1].length > 1) {
      isiCalculator.soal[isiCalculator.soal.length-1].pop();
    } else {
      isiCalculator.soal.pop();
    }
  } else {
    isiCalculator.soal.pop();
    isiCalculator.otak();
  }

  updateUi(isiCalculator.soal, isiCalculator.hasil);
});


    
