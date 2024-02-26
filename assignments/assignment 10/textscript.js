let text=["Each image has been edited by our superior staff","The variety within these images is outstanding","Our team meticulously crafts each design to ensure optimal quality and appeal.","The diversity of styles showcased in our collection is truly remarkable.","Each piece undergoes rigorous evaluation by our expert team before being finalized."];
let currentIndex=0;

function cycleArray(){
    console.log(text[currentIndex])
    currentIndex++;
    document.getElementById("currentIndex").innerHTML=`${text[currentIndex]}`;
    if(currentIndex>=text.length){
        currentIndex=0;
    }
}
const intervalId=setInterval(cycleArray,2000);