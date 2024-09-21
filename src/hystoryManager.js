class HystoryManager {
  constructor () {
    this.sideBar = document.querySelector('.side-bar');
    this.hystoryBars = document.querySelector('.hystory-bars');
  }
  
  barsClick (e) {
    inputHandler.reset === 1 ? uiManager.resetInput() : undefined;
    if (e.target.dataset.jawaban) {
      this.soalHystory(e.target.dataset.jawaban);
      calculator.otak(inputHandler.soal);
      uiManager.updateUi(calculator.soal, calculator.hasil);
    } else {
      return;
    }
  }

  soalHystory(number, soal) {
    if (Array.isArray(soal[soal.length -1])) {
      number < 0 && soal[soal.length-1].length == 1 && soal[soal.length -1][0] == '-' ? calculator.soal[calculator.soal.length-1] = [number] : (calculator.soal.push('+'), calculator.soal.push([number]));
    } else {
      calculator.soal.push([number]);
    }
  }
  
  clearHystory () {
    this.hystoryBars.innerHTML = '';
  }
  
  innerHystory () {
    this.sideBar.classList.toggle('active');
    this.sideBar.classList.contains('active') ? btnHystory.innerText = 'keyboard' : btnHystory.innerText = 'hystory';
  }
}