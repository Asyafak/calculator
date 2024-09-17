function formatSoal(soal) {
  let formattedSoal = '';
  let charCount = 0;

  for (let i = 0; i < soal.length; i++) {
    formattedSoal += soal[i];
    charCount++;

    if (charCount === 15) {
      formattedSoal += '\n';
      charCount = 0;
    }
  }

  return formattedSoal;
}