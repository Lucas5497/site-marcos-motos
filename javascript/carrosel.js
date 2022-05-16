const images = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++

    if(idx > img.length -1){
        ix = 0;
    }

    images.style.transform ='translateX(${-idx * 500}px)';

}   
setInterval(carrosel, 1800);
