import { HystoryManager } from './hystoryManager.js';
const hystoryManager = new HystoryManager();

console.log(hystoryManager)
console.log(uiManager)

export const uiManager = new class UIManager extends HystoryManager {
  constructor () {
    super()
    this.reset = 0;
    this.inputSoal = document.querySelector('.input-soal');
    this.jawaban = document.querySelector('.jawaban');
  }
  
  equals (hasil, soal) {
    if (this.reset == 1 || !Array.isArray(soal[soal.length-1])) {
        return;
      }
    this.reset = 1;
    this.jawaban.innerText = hasil;
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
    hystoryManager.hystoryBars.insertBefore(tagBaru, hystoryManager.hystoryBars.firstChild);
  }
  
  updateUi (soal, hasil) {
    this.inputSoal.value = this.formatSoal(soal.flat().join(''));
    !isNaN(hasil) ? this.jawaban.innerText = hasil : undefined;
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
    this.reset = 0;
    this.inputSoal.classList.remove('active');
    this.jawaban.classList.remove('active');
  }
}