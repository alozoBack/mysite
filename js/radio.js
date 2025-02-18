document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var playPauseButton = document.getElementById('play-pause');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });
    var volumeControl = document.getElementById('volume-control');
    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });

});