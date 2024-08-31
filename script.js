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

btnHystory.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  sideBar.classList.contains('active') ? btnHystory.innerText = 'keyboard' : btnHystory.innerText = 'hystory';
})


btnClearHystory.addEventListener('click', () => {
  hystoryBars.innerHTML = '';
});

hystoryBars.addEventListener('click', e => {
  if (hasil == 1) {
    hasil = 0;
    inputSoal.classList.remove('active');
    jawaban.classList.remove('active');
  }
  if (e.target.classList.contains('hystory-bars')) {return;
  }
  if (Array.isArray(isiCalculator.soal[isiCalculator.soal.length -1])) {
    isiCalculator.soal.push('+');
  }
  
  isiCalculator.soal.push([e.target.classList[1]]);
  inputSoal.value = isiCalculator.soal.flat().join('');

    
  isiCalculator.angka = 0;
  isiCalculator.angka += parseFloat(isiCalculator.soal[0].join('')); 
    
  isiCalculator.soal.map( (element, index) => {
      if (element == '+' || element == '-' || element == '*' || element == '/') {
        isiCalculator.jalan = isiCalculator.ganti(element);
        isiCalculator.jalan(parseFloat(isiCalculator.soal[index+1].join('')));
      } 
  });
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

let isiCalculator = new Calculator(0, []);
let hasil = 0;

keyboard.addEventListener('click', e => {
  if (e.target.innerText == '-' && !Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1])) {
    isiCalculator.soal[isiCalculator.soal.length] = [e.target.innerText];
    inputSoal.value = isiCalculator.soal.flat().join('');
    return;
  }
  if (e.target.classList.contains('number') ) {
    if (hasil == 1) {
      hasil = 0;
      inputSoal.classList.remove('active');
      jawaban.classList.remove('active');
    }
    if (!Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1])) {
      if (e.target.innerText == '.') {
        isiCalculator.soal.push([0 + e.target.innerText]);
        inputSoal.value = isiCalculator.soal.flat().join('');
        return;
      }
      isiCalculator.soal.push([e.target.innerText]);
      isiCalculator.jalan(parseFloat(e.target.innerText));
      nilaiAwal = isiCalculator.angka;
      jawaban.value = isiCalculator.soal.flat().join('');
    } else {
      if (isiCalculator.soal[isiCalculator.soal.length-1][0] == 0 && e.target.innerText == '0') {
        return;
      }
      if (isiCalculator.soal[isiCalculator.soal.length-1][0][1] == '.' && e.target.innerText == '.') {
        return;
      } else if (isiCalculator.soal[isiCalculator.soal.length-1] == '0' && e.target.innerText !== '0') {
        if (e.target.innerText == '.') {
          isiCalculator.soal[isiCalculator.soal.length-1][0] = '0.';
          inputSoal.value = isiCalculator.soal.flat().join('');
          return;
        }
        isiCalculator.soal[isiCalculator.soal.length-1] = [e.target.innerText];
        inputSoal.value = isiCalculator.soal.flat().join('');
        return;
      }
      isiCalculator.soal[isiCalculator.soal.length-1].push(e.target.innerText);
    }
      inputSoal.value = isiCalculator.soal.flat().join('');
      isiCalculator.angka = 0;
      isiCalculator.angka += parseFloat(isiCalculator.soal[0].join('')); 
      
      isiCalculator.soal.map( (element, index) => {
        if (element == '+' || element == '-' || element == '*' || element == '/') {
          isiCalculator.jalan = isiCalculator.ganti(element);
          isiCalculator.jalan(parseFloat(isiCalculator.soal[index+1].join('')));
        } 
      });
      jawaban.innerText = isiCalculator.angka;
    
  } else if (e.target.classList.contains('operator')) {
    if (Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1]) && isiCalculator.soal[isiCalculator.soal.length-1].length == 1 && isiCalculator.soal[isiCalculator.soal.length-1] == '-') {
        return;    
    }
    if (isiCalculator.soal.length == 0) {
      return;
    } else if (!Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1])) {
      isiCalculator.soal[isiCalculator.soal.length-1] = e.target.innerText;
      inputSoal.value = isiCalculator.soal.flat().join('');
      return;
    } else {
      isiCalculator.soal.push(e.target.innerText);
      inputSoal.value = isiCalculator.soal.flat().join('');
    } 
  } else if (e.target.classList.contains('samadengan')) {
    if (hasil == 1) {
      return;
    }
    if (!Array.isArray(isiCalculator.soal[isiCalculator.soal.length-1])) {
      return;
    }
    hasil = 1;
    jawaban.innerText = isiCalculator.angka;
    inputSoal.classList.add('active');
    jawaban.classList.add('active');
    
    isiCalculator.print(isiCalculator.soal.flat().join(''), isiCalculator.angka);
    isiCalculator.soal = [];
    isiCalculator.angka = 0;
  }
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