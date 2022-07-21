

const body = document.querySelector('body');
const modal = document.createElement('div');
    modal.setAttribute('id', 'modal')
    modal.setAttribute('class', 'fadeOut')
const content = document.createElement('div')
    content.setAttribute('id', 'modal-content')

// const x = document.createElement('span');
//     x.setAttribute('class', 'close');
//     x.innerText = '✖';


body.appendChild(modal);
modal.appendChild(content);
// content.appendChild(x);
const header = document.createElement('h1');
content.appendChild(header);


const backupImgURL = 'https://images.unsplash.com/photo-1658279967815-388645755042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80';

    // sheet.insertRule("#modal-content::before { background-image: url('" + backupImgURL + "'); } ", 0)

    const randomMsgArray = [
      "Touch some grass", 
      "Close your eyes", 
      "Pet your pets", 
      "Give someone you love a hug",
      "Take a break",
      "Meditate",
      "Take a nap",
      "Cook a healthy meal",
      "Make a cup of tea",
      "Go for a walk",
      "Enjoy the sunshine",
      "Connect with friends",
      "Call a family member",
      "Make your bed",
      "Read a good book",
      "Declutter your living space",
      "Take a social media break",
      "Practice deep breathing",
      "Go to the gym",
      "Light your favorite candle",
      "Do some exercise or yoga",
      "Start a gratitude journal",
      "Take a break from screens",
      "Listen to some music",
      "Remember to hydrate"
  ];


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

//   x.onclick = toggleModal;

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


function selfCaring(){
  // const accessKey = 'r5PzuV6EnfbtvOcylKIBBrS4v4V173YUb7NXFrzktns';
  const url = 'https://api.unsplash.com/photos/random?client_id=r5PzuV6EnfbtvOcylKIBBrS4v4V173YUb7NXFrzktns';
  fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log('fetching data...');
      console.log(data);
      const imageURL = data.urls.full;
      console.log('image url', imageURL);

      const sheet = (function() {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
      })();
      console.log('sheet:', sheet);
      sheet.insertRule("#modal-content::before { background-image: url('" + imageURL + "'); } ", 0)
  
      const randomIndex = Math.round(Math.random()*(randomMsgArray.length - 1));
      const randomMsg = randomMsgArray[randomIndex];
      
      //populate random msg as header inside body
      header.innerText = randomMsg;
      // body.innerHTML =  '';
  
      console.log(randomMsg, randomIndex);
      toggleModal();

    })
    .catch(err => {
      console.log('fetch failed, calling backup img');
      console.log(sheet, sheet.length);
      // sheet.deleteRule
      sheet.insertRule("#modal-content::before { background-image: url('" + backupImgURL + "'); } ", 0)
  
      const randomIndex = Math.round(Math.random()*(randomMsgArray.length - 1));
      const randomMsg = randomMsgArray[randomIndex];
      
      //populate random msg as header inside body
      header.innerText = randomMsg;
      // body.innerHTML =  '';
  
      console.log(randomMsg, randomIndex);
      toggleModal();
    })
}
  
  
