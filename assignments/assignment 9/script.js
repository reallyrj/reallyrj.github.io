window.onload = () => {
    document.getElementById('start').onclick=bounce;
    document.getElementById('yoga');
};
const bounce = (e) => {
e.preventDefault();
const a = document.querySelector('a');
a.innerHTML = 'Stop';
 const ball=document.getElementById('ball')
 const container=document.getElementById('rectangle');
    let x = 0;
    let y = 0;
    let direction = -1;
    let speed = 5;
    movement=setInterval(() => {
        if (direction !== 0) { // Prevent movement when stopped
          y += direction * speed;
    
          // Check for bottom boundary collision
          if (y + ball.offsetHeight >= container.offsetHeight) {
            y = container.offsetHeight - ball.offsetHeight; // Prevent ball from going below
            direction = 1; // Bounce up
          } else if (y <= 0) { // Check for top boundary collision
            y = 0;
            direction = 1; // Bounce down
          }
           // Update ball's position on screen
          ball.style.top = y + 'px';
        }
      }, 20); // Update position every 20 milliseconds
    };


const define = () => {
    for(let i=0; i<8; i++){
    document.getElementById('yogapic1').onclick = () => {
        const defDiv = document.getElementById('def');
        defDiv.innerHTML = 'Text created when yogapic1 is clicked';
    };
    document.getElementById('yogapic2').onclick
    document.getElementById('yogapic3').onclick
    document.getElementById('yogapic4').onclick
    document.getElementById('yogapic5').onclick
    document.getElementById('yogapic6').onclick
    document.getElementById('yogapic7').onclick
    document.getElementById('yogapic8').onclick
    }
};