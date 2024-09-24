export class InputHandler {
  constructor(){
    this.soal = [];
    this.limitTitik = 0;
    this.limitMin = 0;
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