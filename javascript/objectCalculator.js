const Calculator = new class Calculator {
  constructor() {
    this.hasil = 0;
    this.angka = [];
    this.operasi = [];
    this.soal = [];
    this.limitTitik = 0;
    this.limitMin = 0;
    this.reset = 0;
  }
  
  print(soal, jawaban) {
    const tagBaru = document.createElement('div');
    tagBaru.innerHTML = `
      <div class="bar ${jawaban}">
        <p class="hystory-soal ${jawaban}">${soal}</p>
        <p class="hystory-jawaban ${jawaban}">=${jawaban}</p>
      </div>
    `;
    hystoryBars.appendChild(tagBaru);
  }

  operasikan(operator, angka) {
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

  soalHystory(number) {
    if (Array.isArray(this.soal[this.soal.length -1])) {
      number < 0 && this.soal[this.soal.length-1].length == 1 ? this.soal[this.soal.length-1] = [number] : this.soal[this.soal.length -1][0] == '-' && this.soal[this.soal.length-1].length == 1 ? this.soal[this.soal.length-1].push(number) : (this.soal.push('+'), this.soal.push([number]));
    } else {
      this.soal.push([number]);
    }
  }

  otak() {
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

  penanganan(jenis) {
    this.soal[this.soal.length-1].map( (element) => {
      console.log(element)
      element === jenis ? this.limitTitik = 1 : undefined;
    });
  }

penangananMin (min) {
  if (Array.isArray(this.soal[this.soal.length-1])) {
    this.soal[this.soal.length-1].length === 1 && this.soal[this.soal.length-1][0] === '-' ? undefined : this.soal.push(min);
  } else {
    this.soal.push([min]);
  }
}
  
  penangananTitik(titik) {
    if (!Array.isArray(this.soal[this.soal.length-1])) {
      this.soal.push(['0', titik]);
      this.limitTitik = 1;
    } else {
      this.penanganan(titik);
      this.limitTitik == 0 ? this.soal[this.soal.length-1].push(titik) : undefined;
    }
  }
  
  numbers(number) {
    if (!Array.isArray(this.soal[this.soal.length-1])) {
      this.soal.push([number]);
    } else {
      this.soal[this.soal.length-1][0] === '0' && this.soal[this.soal.length-1][1] === '.' || this.soal[this.soal.length-1][0] !== '0' ? this.soal[this.soal.length-1].push(number) : undefined;
    }
  }
  
  operators(operator) {
    Array.isArray(this.soal[this.soal.length-1]) ? this.soal.push(operator) : this.soal[this.soal.length-1] = operator;
  }
  
  samadengan() {
    if (this.reset == 1 || !Array.isArray(this.soal[this.soal.length-1])) {
        return;
      }
    this.reset = 1;
    jawaban.innerText = this.hasil;
    inputSoal.classList.add('active');
    jawaban.classList.add('active');
    
    this.print(this.soal.flat().join(''), this.hasil);
  }
}