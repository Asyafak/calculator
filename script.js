const keyboard = document.querySelector('.keyboard');
const jawaban = document.querySelector('.jawaban');
const inputSoal = document.querySelector('.input-soal');

const btnHystory = document.getElementById('hystory');
const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');
const sideBar = document.querySelector('.side-bar');
const hystoryBars = document.querySelector('.hystory-bars');
let tagBaru;

//function click button hystory
btnHystory.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  sideBar.classList.contains('active') ? btnHystory.innerText = 'keyboard' : btnHystory.innerText = 'hystory';
})

// function click button clear hystory
btnClearHystory.addEventListener('click', () => {
  hystoryBars.innerHTML = '';
});

// function hystory bars
hystoryBars.addEventListener('click', e => {
  if (hasil == 1) {
    hasil = 0;
    inputSoal.classList.remove('active');
    jawaban.classList.remove('active');
  }
  if (e.target.classList.contains('hystory-bars')) {
    return;
  }
  if (Array.isArray(isiCalculator.soal[isiCalculator.soal.length -1])) {
    isiCalculator.soal.push('+');
  }
  
  isiCalculator.soal.push([e.target.classList[1]]);
  inputSoal.value = isiCalculator.soal.flat().join('');

    isiCalculator.otak();
    
  jawaban.innerText = isiCalculator.angka;
});

function Calculator(angka, soal) {
  this.angka = angka;
  this.soal = soal;
  this.jalan = this.ganti('+');
}

Calculator.prototype.print = function (soal, jawaban) {
  tagBaru = document.createElement('div');
  tagBaru.innerHTML = `
    <div class="bar ${jawaban}">
      <p class="hystory-soal ${jawaban}">${soal}</p>
      <p class="hystory-jawaban ${jawaban}">=${jawaban}</p>
    </div>
  `;
  hystoryBars.appendChild(tagBaru);
}

Calculator.prototype.tambah = function (t) {
  this.angka += t;
}

Calculator.prototype.kurang = function (ku) {
  this.angka -= ku;
}

Calculator.prototype.kali = function (ka) {
  this.angka *= ka;
}

Calculator.prototype.bagi = function (b) {
  this.angka /= b;
}

Calculator.prototype.ganti = function (apa) {
  if (apa == '+') {
    return this.tambah;
  } else if (apa == '-') {
    return this.kurang;
  } else if (apa == '*') {
    return this.kali;
  } else if (apa == '/') {
    return this.bagi;
  }
}

Calculator.prototype.otak = function () {
  this.angka = 0;
  this.angka += parseFloat(this.soal[0].join('')); 
      
  this.soal.map( (element, index) => {
    if (element == '+' || element == '-' || element == '*' || element == '/') {
      this.jalan = this.ganti(element);
      this.jalan(parseFloat(isiCalculator.soal[index+1].join('')));
    } 
  });
}

Calculator.prototype.penangananTitik = function (jenis) {
  console.log(jenis);
  jenis == 'Array' ? this.soal.push(['0', '.']) : this.soal.map( (element) => {
    if (element == '.') {
      return 'done';
    }
  }) == 'done' ? undefined : this.soal[this.soal.length-1].push('.');
}

Calculator.prototype.numbers = function (number) {
  if (!Array.isArray(this.soal[this.soal.length-1])) {
    if (number == '.') {
      this.penangananTitik('Array'); 
    } else {
    this.soal.push([number]);
    }
    this.jalan(parseFloat(number));
  } else if (Array.isArray(this.soal[this.soal.length-1])){
    console.log('done');
    if (number == '.') {
      this.penangananTitik('bukan array');
      return;
    }
    this.soal[this.soal.length-1].push(number);
  }
}

Calculator.prototype.operators = function (operator) {
  Array.isArray(this.soal[this.soal.length-1]) ? this.soal.push(operator) : this.soal[this.soal.length-1] = operator;
}

let isiCalculator = new Calculator(0, []);
let hasil = 0;

keyboard.addEventListener('click', e => {
  if (e.target.classList.contains('number') || e.target.classList.contains('titik')) {
    isiCalculator.numbers(e.target.innerText);
    isiCalculator.otak();
  } else if (e.target.classList.contains('operator')) {
    isiCalculator.operators(e.target.innerText);
  }
  inputSoal.value = isiCalculator.soal.flat().join('');
  jawaban.innerText = isiCalculator.angka;
});

btnClear.addEventListener('click', () => {
  isiCalculator.soal = [];
  isiCalculator.angka = 0;
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
  }

  inputSoal.value = isiCalculator.soal.flat().join('');
  jawaban.innerText = '';
});