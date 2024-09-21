class Calculator {
  constructor() {
    this.angka = [];
    this.operasi = [];
  }

  operasikan (operator, angka) {
    switch (operator) {
      case '+':
      case undefined:
        inputHandler.hasil += angka;
        break;
      case '-':
        inputHandler.hasil -= angka;
        break;
      case '×':
        inputHandler.hasil *= angka;
        break;
      case '÷':
        inputHandler.hasil /= angka;
        break;
    }
  }

  otak (soal) {
    inputHandler.hasil = 0;
    inputHandler.limitTitik = 0;
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