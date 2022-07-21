const contents = document.getElementsByTagName('body');


//declare random msg
const randomMsg = ["Touch some GRASS", "Close your eyes", "Pet your pet", "Give a hug"]

//populate random msg as header inside body
contents.innerHTML =  `<h1>${randomMsg[Math.round(Math.random()*randomMsg.length)]}</h1>`;

//testing randomMsg
console.log(randomMsg[Math.round(Math.random()*randomMsg.length-1)]);
