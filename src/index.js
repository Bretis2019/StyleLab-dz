import {desktop_dist} from "./desktop_dist";

if(screen.width < 1000){
    window.location.href = 'home.html'
}else{
    desktop_dist();
}

let currentWidth = window.innerWidth;

function checkScreenWidth() {
    let newWidth = window.innerWidth;

    if (currentWidth >= 1000 && newWidth < 1000) {
        // Transition from bigger than 1000 to smaller than 1000
        location.reload();
    } else if (currentWidth < 1000 && newWidth >= 1000) {
        // Transition from smaller than 1000 to bigger than 1000
        location.reload();
    }

    currentWidth = newWidth;
}

// Call the function when the page loads and when the window is resized
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);
