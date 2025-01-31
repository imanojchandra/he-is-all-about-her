const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.querySelector('.container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Adjust for touch events on mobile
const isTouchDevice = 'ontouchstart' in document.documentElement;

if (isTouchDevice) {
    noButton.addEventListener('touchstart', moveButton);
} else {
    noButton.addEventListener('mouseover', moveButton);
}

//noButton.addEventListener('mouseover', () => {
function moveButton() {
    noButton.style.position = 'absolute';
    
    const viewportWidth = window.innerWidth * 0.90;
    const viewportHeight = window.innerHeight * 0.90;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxLeft = viewportWidth - buttonWidth;
    const maxTop = viewportHeight - buttonHeight;
    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);
    const viewportOffsetX = (window.innerWidth - viewportWidth) / 2;
    const viewportOffsetY = (window.innerHeight - viewportHeight) / 2;
    noButton.style.left = `${viewportOffsetX + randomLeft}px`;
    noButton.style.top = `${viewportOffsetY + randomTop}px`;
};

yesButton.addEventListener('click', () => {
    // Hide the question and buttons
    container.innerHTML = "<h1>I knew you'd say yes! See you tomorrow.</h1>";
    // Show the video background
    backgroundVideo.classList.remove('hidden');
});
