function updateUi(soal, hasil) {
  inputSoal.value = formatSoal(soal.flat().join(''));
  !isNaN(Calculator.hasil) ? jawaban.innerText = hasil : undefined;
  this.soal = [];
  this.hasil = 0;
}