const contents = document.getElementsByTagName('body');



const randomMsg=["Touch some GRASS", "Close your eyes", "Pet your pet", "Give a hug"]


contents.innerHTML =  "<h1>"randomMsg[Math.round(Math.random()*messages.length)]"</h1>"

console.log(randomMsg[Math.round(Math.random()*messages.length)])
