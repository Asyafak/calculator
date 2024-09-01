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
      
      isiCalculator.otak();
      
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