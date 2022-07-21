

const body = document.querySelector('body');
const modal = document.createElement('div');
    modal.setAttribute('id', 'modal')
    modal.setAttribute('class', 'fadeOut')
const content = document.createElement('div')
    content.setAttribute('id', 'modal-content')
    // content.setAttribute('class', 'animated')
const x = document.createElement('span');
    x.setAttribute('class', 'close');
    x.innerText = '✖';
    // <span class='close'>✖</span>

    body.appendChild(modal);
    modal.appendChild(content);
    content.appendChild(x);
    const header = document.createElement('h1');
    content.appendChild(header);
   
function selfCaring(){
    //declare random msg
    const randomMsgArray = ["Touch some GRASS", "Close your EYES", "Pet your PET/S", "Give a HUG"];

    const randomIndex = Math.round(Math.random()*(randomMsgArray.length - 1));
    const randomMsg = randomMsgArray[randomIndex];
    
    //populate random msg as header inside body
    header.innerText = randomMsg;
    // body.innerHTML =  '';

    console.log(randomMsg, randomIndex);
    toggleModal();
//const testText = `<h1>${randomMsg[Math.round(Math.random()*randomMsg.length-1)]}</h1>`

//testing randomMsg
//console.log(randomMsg[Math.round(Math.random()*randomMsg.length-1)]);
}

function toggleModal() {
    // modal.style.display = 'none';
    if (modal.classList.contains('fadeOut')) {
        modal.classList.remove('fadeOut');
        modal.classList.add('fadeIn');
    } else if (modal.classList.contains('fadeIn')) {
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
    }
    
    // content.classList.remove('slideInDown');
    // content.classList.add('fadeOutUpBig', 'slower');
    // setTimeout(function(){ 
    //   modal.classList.remove('fadeIn');
    //   modal.classList.add('fadeOut');
    // }, 300);
  }

  x.onclick = toggleModal;

  window.onclick = function(event) {
    if (event.target == modal) {
      toggleModal();
    }
  }


//Set time interval 
let interval = 500//1000 * 60 * 20; // 20 mins 
setInterval(() => {
    // if modal's class is fade in, don't invoke selfCaring()
    // if modal's class is fade out, invoke selfCaring()
    if (modal.classList.contains('fadeOut')) selfCaring();
}, interval);

