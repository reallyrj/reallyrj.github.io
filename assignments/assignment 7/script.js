
window.onload = () => {
    const image=document.getElementById("changeimage").onclick=imagechange;
    const rotate= document.getElementById("rotate").onclick=rotateClicked;
    const star= document.getElementById("addstars").onclick=starClicked;
};
/*image*/
const imagechange = () => {
    const images = document.getElementById("clickimage");
    const image=document.createElement("img");
    image.src="images/200x200(2).gif";
    images.appendChild(image);
}
/*rotate*/
const rotateClicked = () => {
}

/*star*/
const starClicked = () => {
    const stars = document.getElementById("stars");
    const star=document.createElement("img");
    star.src="images/star.png";
    stars.appendChild(star);
}
