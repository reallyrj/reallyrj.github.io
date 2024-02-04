
window.onload = () => {
    const image=document.getElementById("changeimage").onclick=imagechange;

    const star = document.getElementById("addstars").onclick=starClicked;
};
/*image*/
const imagechange = () => {
    const images = document.getElementById("clickimage");
    const image=document.createElement("img");
    image.src="images/200x200(2).gif";
    images.appendChild(image);
}
/*star*/
const starClicked = () => {
    const stars = document.getElementById("stars");
    const star=document.createElement("img");
    star.src="images/star.png";
    stars.appendChild(star);

}
window.onload=()=>{
    const imagebuttom=document.getElementById("changeimage");
    const image=document.getElementById("switchimage");
    imagebuttom.onclick=()=>{
        alert("image changed");
        image="images/200x200(2).gif";
    };
};
