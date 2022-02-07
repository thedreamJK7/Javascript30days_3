let typewriter = document.getElementById('typewriter');

const textArray = typewriter.textContent.split("");

let timeLooper;

typewriter.innerHTML = "";


function typeWriterEffect() {
    if(textArray.length > 0)
    {
        typewriter.innerHTML += textArray.shift();
        console.log(textArray);
    } else {
        clearTimeout(timeLooper);
    }

    timeLooper =  setTimeout("typeWriterEffect()", Math.floor(Math.random() * (200, 250)));
}

typeWriterEffect();