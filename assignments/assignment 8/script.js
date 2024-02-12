
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    const image=document.getElementById("command").oninput=changeImage;
    const yoga=document.getElementById("yogaslider").oninput=changeYoga;
  };

  // Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
const changeImage = () => {
    const inputValue = document.getElementById("command").value;
    const image = document.getElementById("image");

    // Logic to change the image based on the input value
    if (inputValue==("b")) {
        image.src = "images/read.jpg";
    } else if (inputValue==("c")) {
        image.src = "images/clown.jpg";
    } else if (inputValue==("p")) {
        image.src = "images/birthday.jpg";
    } else if (inputValue==("r")) {
        image.src = "images/rain.jpg";
    } else if (inputValue==("s")) {
        image.src = "images/shovel.jpg";
    } else if (inputValue==("w")) {
        image.src = "images/work.jpg";
    } else {
        image.src = "images/original.jpg";
    }
};

const changeYoga = () => {
    const sliderValue = document.getElementById("yogaslider").value;
    const yogaImage = document.getElementById("yoga");

    // Logic to change the yoga image based on the slider value
    if (sliderValue === "1") {
        yogaImage.src = "images/yoga1.jpg";
    } 
    else if (sliderValue === "2") {
        yogaImage.src = "images/yoga2.jpg";
    } 
    else if (sliderValue === "3") {
        yogaImage.src = "images/yoga3.jpg";
    } 
    else if (sliderValue === "4") {
        yogaImage.src = "images/yoga4.jpg";
    } 
    else if (sliderValue === "5") {
        yogaImage.src = "images/yoga5.jpg";
    } 
    else if (sliderValue === "6") {
        yogaImage.src = "images/yoga6.jpg";
    } 
    else if (sliderValue === "7") {
        yogaImage.src = "images/yoga7.jpg";
    } 
    else if (sliderValue === "8") {
        yogaImage.src = "images/yoga8.jpg";
    } 
    else {
        yogaImage.src = "images/yoga1.jpg";
    }
};
