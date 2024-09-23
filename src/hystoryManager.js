export class HystoryManager {
  constructor () {
    this.btnHystory = document.getElementById('hystory');
    this.sideBar = document.querySelector('.side-bar');
    this.hystoryBars = document.querySelector('.hystory-bars');
  }
  

  clearHystory = () => {
    this.hystoryBars.innerHTML = '';
  }
  
  innerHystory = () => {
    this.sideBar.classList.toggle('active');
    this.sideBar.classList.contains('active') ? this.btnHystory.innerText = 'keyboard' : this.btnHystory.innerText = 'hystory';
  }
}