window.onload=()=>{
    const imagebuttom=document.getElementById("changeimage");
    const image=document.getElementById("switchimage");
    imagebuttom.onclick=()=>{
        alert("image changed");
        image="images/200x200(2).gif";
    };
};
window.onload = () => {
    const imageslider = document.getElementById('imageslider');
    const rotateImage = document.getElementById('rotateimage');

    imageslider.oninput = () => {
        const rotation = imageslider.value;
        rotateImage.style.transform = `rotate(${rotation}deg)`;
    };
};
/*star*/
window.onload = () => {
    const star = document.getElementById("addstars").onclick=starClicked;
};
const starClicked = () => {
    const stars = document.getElementById("stars");
    const star=document.createElement("img");
    star.src="images/star.png";
    stars.appendChild(star);
}