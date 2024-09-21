class UIManager {
  constructor () {
    this.inputSoal = document.querySelector('.input-soal');
    this.jawaban = document.querySelector('.jawaban');
  }
  
  equals (reset, hasil, soal) {
    if (this.reset == 1 || !Array.isArray(this.soal[this.soal.length-1])) {
        return;
      }
    inputHandler.reset = 1;
    jawaban.innerText = hasil;
    this.inputSoal.classList.add('active');
    this.jawaban.classList.add('active');
    
    this.print(soal.flat().join(''), hasil);
  }
  
  print(soal, jawaban) {
    const tagBaru = document.createElement('div');
    tagBaru.classList.add('bar');
    tagBaru.setAttribute('data-jawaban', jawaban);
    tagBaru.innerHTML = `
      <p class="hystory-soal" data-jawaban="${jawaban}">${soal}</p>
      <p class="hystory-jawaban" data-jawaban="${jawaban}">=${jawaban}</p>
    `;
    hystoryBars.appendChild(tagBaru);
    inputHandler.soal = [];
  }
  
  updateUi (soal, hasil) {
    this.inputSoal.value = this.formatSoal(soal.flat().join(''));
    !isNaN(inputHandler.hasil) ? this.jawaban.innerText = hasil : undefined;
    inputHandler.soal = [];
    inputHandler.hasil = 0;
  }
  
  formatSoal (soal) {
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

  resetInput () {
    inputHandler.reset = 0;
    this.inputSoal.classList.remove('active');
    this.jawaban.classList.remove('active');
  }
}