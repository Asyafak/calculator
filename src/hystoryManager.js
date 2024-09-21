class HystoryManager {
  constructor(){
    
  }
  
  barsClick (e) {
    inputHandler.reset === 1 ? uiManager.resetInput() : undefined;
    if (e.target.dataset.jawaban) {
      Calculator.soalHystory(e.target.dataset.jawaban);
      Calculator.otak();
      updateUi(Calculator.soal, Calculator.hasil);
    } else {
      return;
    }
  )
  
  btnClearHystory.addEventListener('click', () => {
    hystoryBars.innerHTML = '';
  });
  
  btnHystory.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    sideBar.classList.contains('active') ? btnHystory.innerText = 'keyboard' : btnHystory.innerText = 'hystory';
  });
}