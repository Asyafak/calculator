const keyboard = document.querySelector('.keyboard');

const btnHystory = document.getElementById('hystory');
const btnClearHystory = document.querySelector('.btn-clear-hystory');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');
const sideBar = document.querySelector('.side-bar');
const hystoryBars = document.querySelector('.hystory-bars');

const inputHandler = new InputHandler();
const calculator = new Calculator();
const hystoryManager = new HystoryManager();
const uiManager = new UIManager();

keyboard.addEventListener('click', inputHandler.keyboardClick);

btnClear.addEventListener('click', inputHandler.inputClear);

btnDelete.addEventListener('click', inputHandler.inputDel);

hystoryBars.addEventListener('click', hystoryManager.barsClick)