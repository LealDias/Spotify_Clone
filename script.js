const backgroundMusic = document.getElementById('backgroundMusic');
        
function playBackgroundMusic() {
    backgroundMusic.volume = 0.5; 
    backgroundMusic.loop = true; 
    backgroundMusic.play(); 
}
        
window.addEventListener('load', playBackgroundMusic);