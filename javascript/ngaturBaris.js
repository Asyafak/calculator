  let versi = 0;
function formatSoal(soal) {
  let formattedSoal = '';
  let charCount = 0;
  
  
  switch (versi) {
    case 1:
      inputSoal.style.fontSize = '30px';
      break;
    case 2:
      inputSoal.style.fontSize = '20px';
      break;
  }

  for (let i = 0; i < soal.length; i++) {
    formattedSoal += soal[i];
    charCount++;
      console.log(versi)

    if (charCount === 15) {
      formattedSoal += '\n';
      versi++;
      charCount = 0;
    }
  }

  return formattedSoal;
}