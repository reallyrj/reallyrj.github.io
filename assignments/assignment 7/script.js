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
window.onload=()=>{
const starsbutton=document.getElementById("addstars");
starsbutton.onclick=()=>{
    alert("Stars added");
    const shape=document.createElement("div");
    shape.className="star";
    document.body.appendChild(star);
    };
};
