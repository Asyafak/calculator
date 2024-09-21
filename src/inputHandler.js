class InputHandler {
  constructor(){
    this.hasil = 0;
    this.soal = [];
    this.limitTitik = 0;
    this.limitMin = 0;
    this.reset = 0;
  }
  
  keyboardClick = e => {
    this.reset === 1 ? uiManager.resetInput() : undefined;
  
    switch (e.target.dataset.type) {
      case 'number':
        this.numbersHandler(e.target.innerText);
        calculator.otak(this.soal);
        break;
      case 'titik':
        this.periodHandler(e.target.innerText);
        break;
      case 'min':
        this.minHandler(e.target.innerText);
        break;
      case 'operator':
        this.operatorsHandler(e.target.innerText);
        break;
      case 'equals':
        uiManager.equals(this.reset, this.hasil, this.soal);
        break;
    }
  
    uiManager.updateUi(this.soal, this.hasil);
  }
  
  inputClear = () => {
    this.soal = [];
    this.hasil = 0;
    uiManager.inputSoal.value = '';
    uiManager.jawaban.innerText = '';
  }
  
  inputDel = () => {
    if (Array.isArray(this.soal[this.soal.length-1])) {
      this.soal[this.soal.length-1].length > 1 ? this.soal[this.soal.length-1].pop() : this.soal.pop();
    } else {
      this.soal.pop();
    }

    uiManager.updateUi(this.soal, this.hasil);
  }
  
  penanganan (jenis) {
    this.soal[this.soal.length-1].map( (element) => {
      element === jenis ? this.limitTitik = 1 : undefined;
    });
  }

  minHandler (min) {
    if (Array.isArray(this.soal[this.soal.length-1])) {
      this.soal[this.soal.length-1].length === 1 && this.soal[this.soal.length-1][0] === '-' ? undefined : this.soal.push(min);
    } else {
      this.soal.push([min]);
    }
  }
  
  periodHandler (titik) {
    if (!Array.isArray(this.soal[this.soal.length-1])) {
      this.soal.push(['0', titik]);
      this.limitTitik = 1;
    } else {
      this.penanganan(titik);
      this.limitTitik == 0 ? this.soal[this.soal.length-1].push(titik) : undefined;
    }
  }
  
  numbersHandler (number) {
    if (!Array.isArray(this.soal[this.soal.length-1])) {
      this.soal.push([number]);
    } else {
      this.soal[this.soal.length-1][0] === '0' && this.soal[this.soal.length-1][1] === '.' || this.soal[this.soal.length-1][0] !== '0' ? this.soal[this.soal.length-1].push(number) : undefined;
    }
  }
  
  operatorsHandler (operator) {
    Array.isArray(this.soal[this.soal.length-1]) ? this.soal.push(operator) : this.soal[this.soal.length-1] = operator;
  }
}