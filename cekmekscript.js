        const video = document.getElementById('myVideo');
        const overlay = document.getElementById('videoOverlay');

        video.addEventListener('play', () => { 
            overlay.style.display = 'none'; 
            video.style.filter = 'brightness(1)';
        });
        
        video.addEventListener('pause', () => { 
            overlay.style.display = 'flex'; 
            video.style.filter = 'brightness(0.6)';
        });