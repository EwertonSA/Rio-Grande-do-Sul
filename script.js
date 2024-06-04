
let currentSlide = 0;

function changeSlide() {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) {
        console.error("No carousel items found");
        return;
    }
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % items.length;
    items[currentSlide].classList.add('active');
    console.log("Current slide: ", currentSlide); // Adicionado para depuração
}

// Initialize the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length > 0) {
        items[0].classList.add('active');
    } else {
        console.error("No carousel items found on DOMContentLoaded");
    }
    setInterval(changeSlide, 3000); // Change slide every 3 seconds
});

