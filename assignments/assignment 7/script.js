window.onload=()=>{
    const imagebuttom=document.getElementById("changeimage");
    const image=document.getElementById("image");
    
    imagebuttom.onclick=()=>{
        alert("Image changed");
        image.src='images/200x200(2).gif';
    };
};
window.onload=()=>{
const starsbutton=document.getElementById("addstars");
starsbutton.onclick=()=>{
    alert("Stars added");
    };
};