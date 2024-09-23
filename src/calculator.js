export class Calculator {
  constructor() {
    this.angka = [];
    this.operasi = [];
    this.hasil = 0;
  }

  operasikan (operator, angka) {
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

  otak (soal) {
    this.hasil = 0;
    // inputHandler.limitTitik = 0;
    this.operasi = soal.filter( op => {
      return !Array.isArray(op);
    });
        
    this.angka = soal.filter( int => {
      return Array.isArray(int);
    }).map( (int, index) => {
      this.operasikan(this.operasi[index-1], parseFloat(int.join('')));
    });
  }
}