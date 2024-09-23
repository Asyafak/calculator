console.log(HystoryManager)
console.log(uiManager)

export class HystoryManager {
  constructor () {
    this.btnHystory = document.getElementById('hystory');
    this.sideBar = document.querySelector('.side-bar');
    this.hystoryBars = document.querySelector('.hystory-bars');
  }
  
  barsClick = e => {
    uiManager.reset === 1 ? uiManager.resetInput() : undefined;
    if (e.target.dataset.jawaban) {
      this.soalHystory(e.target.dataset.jawaban, inputHandler.soal);
      calculator.otak(inputHandler.soal);
      uiManager.updateUi(calculator.soal, calculator.hasil);
    } else {
      return;
    }
  }

  soalHystory (number, soal) {
    if (Array.isArray(soal[soal.length -1])) {
      number < 0 && soal[soal.length-1].length == 1 && soal[soal.length -1][0] == '-' ? inputHandler.soal[inputHandler.soal.length-1] = [number] : (inputHandler.soal.push('+'), inputHandler.soal.push([number]));
    } else {
      inputHandler.soal.push([number]);
    }
  }
  
  clearHystory = () => {
    this.hystoryBars.innerHTML = '';
  }
  
  innerHystory = () => {
    this.sideBar.classList.toggle('active');
    this.sideBar.classList.contains('active') ? this.btnHystory.innerText = 'keyboard' : this.btnHystory.innerText = 'hystory';
  }
}