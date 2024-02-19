window.onload = () => {
    document.getElementById('start').onclick=toggleButton;
    document.getElementById('yoga').onclick=define;
};
// Function to move the image down
const moveImageDown = () => {
    const rectangle = document.getElementById('rectangle');
    const movingImage = document.getElementById('ball');
    
    // Get the current position of the image
    let currentPosition = parseInt(movingImage.style.top) || 0;
    
    // Update the position to move it down
    currentPosition += 10; // Adjust the value as needed
    
    // Set the new position
    movingImage.style.top = currentPosition + 'px';
};

const toggleButton = (e) => {
    e.preventDefault();
    let intervalId;
    const reset=()=>{
        currentPosition=0;
    }

    const startButton = document.getElementById('start');
     if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Stop';
        setInterval(moveImageDown, 1000);
    } else {
        startButton.innerHTML = 'Start';
        clearInterval(reset);
    }
};

 const define = () => {
    const p1=document.getElementById('p1');
    const p2=document.getElementById('p2');
    const p3=document.getElementById('p3');
    const p4=document.getElementById('p4');
    const p5=document.getElementById('p5');
    const p6=document.getElementById('p6');
    const p7=document.getElementById('p7');
    const p8=document.getElementById('p8');

    for(i=0; i<1; i++){
    document.getElementById('yogapic1').onclick = () => {
        const defDiv = document.getElementById('def');
        p1.innerHTML = 'Text created when yogapic1 is clicked';
        i++;
    };};
    for(i=0; i<1; i++){
        document.getElementById('yogapic2').onclick = () => {
            const defDiv = document.getElementById('def');
            p2.innerHTML = 'Text created when yogapic2 is clicked';
            i++;
        };};
    for(i=0; i<1; i++){
            document.getElementById('yogapic3').onclick = () => {
                const defDiv = document.getElementById('def');
                p3.innerHTML = 'Text created when yogapic3 is clicked';
                i++;
            };};
            for(i=0; i<1; i++){
                document.getElementById('yogapic4').onclick = () => {
                    const defDiv = document.getElementById('def');
                    p4.innerHTML = 'Text created when yogapic4 is clicked';
                    i++;
                };};
                for(i=0; i<1; i++){
                    document.getElementById('yogapic5').onclick = () => {
                        const defDiv = document.getElementById('def');
                       p5.innerHTML = 'Text created when yogapic5 is clicked';
                        i++;
                    };};
                    for(i=0; i<1; i++){
                        document.getElementById('yogapic6').onclick = () => {
                            const defDiv = document.getElementById('def');
                            p6.innerHTML = 'Text created when yogapic6 is clicked';
                            i++;
                        };};
                        for(i=0; i<1; i++){
                            document.getElementById('yogapic7').onclick = () => {
                                const defDiv = document.getElementById('def');
                                p7.innerHTML = 'Text created when yogapic7 is clicked';
                                i++;
                            };};
                            for(i=0; i<1; i++){
                                document.getElementById('yogapic1').onclick = () => {
                                    const defDiv = document.getElementById('def');
                                   p8.innerHTML = 'Text created when yogapic8 is clicked';
                                    i++;
                                };};
    };