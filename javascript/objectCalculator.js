function Calculator(hasil, soal) {
  this.hasil = hasil;
  this.angka = [];
  this.operasi = [];
  this.soal = soal;
  this.limitTitik = 0;
  this.limitMin = 0;
  this.reset = 0;
}

Calculator.prototype.print = function (soal, jawaban) {
  const tagBaru = document.createElement('div');
  tagBaru.innerHTML = `
    <div class="bar ${jawaban}">
      <p class="hystory-soal ${jawaban}">${soal}</p>
      <p class="hystory-jawaban ${jawaban}">=${jawaban}</p>
    </div>
  `;
  hystoryBars.appendChild(tagBaru);
}

Calculator.prototype.operasikan = function (operator, angka) {
  switch (operator) {
    case '+':
    case undefined:
      this.hasil += angka;
      break;
    case '-':
      this.hasil -= angka;
      break;
    case '×':
      this.hasil *= angka;
      break;
    case '÷':
      this.hasil /= angka;
      break;
  }
}

Calculator.prototype.soalHystory = function (number) {
  if (Array.isArray(this.soal[this.soal.length -1])) {
    number < 0 && this.soal[this.soal.length-1].length == 1 ? this.soal[this.soal.length-1] = [number] : this.soal[this.soal.length -1][0] == '-' && this.soal[this.soal.length-1].length == 1 ? this.soal[this.soal.length-1].push(number) : (this.soal.push('+'), this.soal.push([number]));
  } else {
    this.soal.push([number]);
  }
}

Calculator.prototype.otak = function () {
  this.hasil = 0;
  this.limitTitik = 0;
  this.operasi = this.soal.filter( op => {
    return !Array.isArray(op);
  });
      
  this.angka = this.soal.filter( int => {
    return Array.isArray(int);
  }).map( (int, index) => {
    this.operasikan(this.operasi[index-1], parseFloat(int.join('')));
  });
}

Calculator.prototype.penanganan = function (jenis, limit) {
  this.soal[this.soal.length-1].map( (element) => {
    element == jenis ? limit = 1 : limit = 0;
  });
  return limit;
}

Calculator.prototype.penangananTitik = function (jenis) {
  if (jenis == 'Array') {
    this.soal.push(['0', '.']);
    this.limitTitik = 1;
  } else {
    this.limitTitik = this.penanganan('.', this.limitTitik);
    this.limitTitik == 0 ? this.soal[this.soal.length-1].push('.') : undefined;
  }
}

Calculator.prototype.penangananNol = function (number) {
  number !== '0' && this.soal[this.soal.length-1].length == 1 ? this.soal[this.soal.length-1][0] = number : this.soal[this.soal.length-1][1] == '.' ? this.soal[this.soal.length-1].push(number) : undefined;
}

Calculator.prototype.numbers = function (number) {
  if (!Array.isArray(this.soal[this.soal.length-1])) {
    if (number == '.') {
      this.penangananTitik('Array'); 
    } else {
    this.soal.push([number]);
    }
  } else {
    if (number == '.') {
      this.penangananTitik('bukan array');
    } else if (this.soal[this.soal.length-1][0] == '0') {
      this.penangananNol(number);
    } else if (this.soal[this.soal.length-1][0] == '-' && number == '-') {
      this.soal[this.soal.length-1].length == 1 ? undefined : this.soal.push('-');
    } else {
      switch (number) {
        case '-':
          this.soal.push(number);
          break;
        default:
          this.soal[this.soal.length-1].push(number);
      }
    }
  }
}

Calculator.prototype.operators = function (operator) {
  if (this.soal[this.soal.length-1][0] == '-' && operator == '-' && this.soal[this.soal.length-1].length == 1) {
    return;
  }
  Array.isArray(this.soal[this.soal.length-1]) ? this.soal.push(operator) : operator == '-' ? this.soal.push(['-']) : this.soal[this.soal.length-1] = operator;
}

Calculator.prototype.samadengan = function () {
  if (this.reset == 1) {
      return;
    }
    if (!Array.isArray(this.soal[this.soal.length-1])) {
      return;
    }
    this.reset = 1;
    jawaban.innerText = this.hasil;
    inputSoal.classList.add('active');
    jawaban.classList.add('active');
    
    this.print(this.soal.flat().join(''), this.hasil);
    this.soal = [];
    this.hasil = 0;
}

const isiCalculator = new Calculator(0, []);