window.onload=()=>{
    const imagebuttom=document.getElementById("changeimage");
    const image=document.getElementById("switchimage");
    imagebuttom.onclick=()=>{
        alert("image changed");
        image="images/200x200(2).gif";
    };
};
window.onload = () => {
    const imageSlider = document.getElementById('imageSlider');
    const rotateImage = document.getElementById('rotateimage');

    imageSlider.oninput = () => {
        const rotation = imageSlider.value;
        rotateImage.style.transform = `rotate(${rotation}deg)`;
    };
};
window.onload=()=>{
const starsbutton=document.getElementById("addstars");
starsbutton.onclick=()=>{
    alert("Stars added");
    };
};
