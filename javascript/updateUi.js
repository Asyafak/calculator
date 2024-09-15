function updateUi(soal, hasil) {
  inputSoal.value = formatSoal(soal.flat().join(''));
  !isNaN(isiCalculator.hasil) ? jawaban.innerText = hasil : undefined;
}