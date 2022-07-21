const body = document.querySelector('body');
const modal = document.createElement('div');
    modal.setAttribute('id', 'modal')
    // modal.setAttribute('class', 'fadeOut')
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
    
    //declare random msg
    const randomMsgArray = ["Touch some GRASS", "Close your eyes", "Pet your pet", "Give a hug"];
    const randomMsg = randomMsgArray[Math.round(Math.random()*randomMsgArray.length-1)];
    
    //populate random msg as header inside body
    const header = document.createElement('h1');
    header.innerText = randomMsg;
    // body.innerHTML =  '';
    content.appendChild(header);

    console.log(randomMsg);

//const testText = `<h1>${randomMsg[Math.round(Math.random()*randomMsg.length-1)]}</h1>`

//testing randomMsg
//console.log(randomMsg[Math.round(Math.random()*randomMsg.length-1)]);


function fadeOutModal() {
    modal.style.display = 'none';
    // content.classList.remove('slideInDown');
    // content.classList.add('fadeOutUpBig', 'slower');
    // setTimeout(function(){ 
    //   modal.classList.remove('fadeIn');
    //   modal.classList.add('fadeOut');
    // }, 300);
  }

  x.onclick = fadeOutModal;

  window.onclick = function(event) {
    if (event.target == modal) {
      fadeOutModal();
    }
  }
