
window.onload = () => {
    const image=document.getElementById("switchimage").onclick=imagechange;
    const rotate=document.getElementById("slider").oninput=rotation;
    const star= document.getElementById("stars").onclick=starClicked;
};
/*image*/
const imagechange = () => {
    const images = document.getElementById("clickimage");
    images.removeChild(images.firstChild);
    images.removeChild(images.firstChild);
    images.removeChild(images.firstChild);
    images.removeChild(images.firstChild);
    images.removeChild(images.firstChild);
    const image=document.createElement("img");
    image.src="images/200x200(2).gif";
    images.appendChild(image);
}
/*rotate*/
const rotation = () => {
    const rotate = document.getElementById("rotateimage");
    const image = document.getElementById("imageslider");
    image.style.transform = `rotate(${rotate.value}deg)`;
}
/*star works*/
const starClicked = () => {
    const stars = document.getElementById("stars");
    const star=document.createElement("img");
    star.src="images/stars.png";
    stars.appendChild(star);
}
