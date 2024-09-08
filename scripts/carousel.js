let currentIndex = 0;
const slider = document.getElementById("slider");
const progressBar = document.getElementById('progress-bar');
const items = slider.children;
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 32; // 32px de gap
let stopBeforeEnd = 0;

function updateStopBeforeEnd() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        stopBeforeEnd = 3;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        stopBeforeEnd = 1;
    } else {
        stopBeforeEnd = 0;
    }
    updateProgressBar();
    slider.style.transform = "translateX(" + (-currentIndex * itemWidth) + "px)";
}

function updateProgressBar() {
    const progress = (currentIndex / (totalItems - 1 - stopBeforeEnd)) * 100;
    progressBar.style.width = `${progress}%`;
}

function goNext() {
    if (currentIndex < totalItems - 1 - stopBeforeEnd) {
        currentIndex++;
    } else {
        currentIndex = 0; // Revenir au début
    }
    slider.style.transform = "translateX(" + (-currentIndex * itemWidth) + "px)";
    updateProgressBar();
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1 - stopBeforeEnd; // Revenir à la fin
    }
    slider.style.transform = "translateX(" + (-currentIndex * itemWidth) + "px)";
    updateProgressBar();
}

document.getElementById("next").addEventListener("click", goNext);
document.getElementById("prev").addEventListener("click", goPrev);

// Initialiser la barre de progression et la valeur de stopBeforeEnd
updateStopBeforeEnd();

// Écouter les changements de taille d'écran
window.addEventListener('resize', updateStopBeforeEnd);