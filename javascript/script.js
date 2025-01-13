let progress = 0;
    
        function updateProgress() {
            progress++;
            const progressText = document.getElementById('progress-text');
            const progressTextSpan = progressText.querySelector('.progress-text');
            progressTextSpan.textContent = `${progress}/3`;
            // Update progress bar width
            const progressBar = document.getElementById('progress-bar');
            const progressPercentage = (progress / 3) * 100;
            progressBar.style.width = `${progressPercentage}%`;
            progressText.style.opacity = 0; // Start with opacity 0
            setTimeout(() => {
                progressText.style.opacity = 1; // Fade in with a smooth transition
            }, 100);
        }
    
        function showPopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'flex';
        }
    
        function hidePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none';
        }
    
        async function simulateLoading(buttonId) {
            const button = document.getElementById(buttonId);
            return new Promise((resolve) => {
                button.disabled = true;
                button.classList.remove('active');
                showPopup();
                setTimeout(() => {
                    hidePopup();
                    button.classList.add('completed');
                    resolve();
                }, 2000);
            });
        }
    
        async function handleClick(action) {
            switch (action) {
                case 'subscribe':
                    await simulateLoading('subscribe-btn');
                    document.getElementById('follow-btn').disabled = false;
                    document.getElementById('follow-btn').classList.add('active');
                    window.open('https://www.youtube.com/channel/UCnlvfhUF0ucjcHVeuxudRsg', '_blank');
                    updateProgress();
                    break;
                case 'follow':
                    await simulateLoading('follow-btn');
                    document.getElementById('join-btn').disabled = false;
                    document.getElementById('join-btn').classList.add('active');
                    window.open('https://instagram.com/zeapplefjx_dika', '_blank');
                    updateProgress();
                    break;
                case 'join':
                    await simulateLoading('join-btn');
                    document.getElementById('unlock-button').disabled = false;
                    document.getElementById('unlock-button').classList.add('active');
                    window.open('https://t.me/viviendochannel', '_blank');
                    updateProgress();
                    break;
            }
        }
    
        function showUsernamePassword() {
            const popup = document.getElementById('popup');
            const popupContent = document.querySelector('.popup-content');
            popupContent.textContent = 'Username: GqDgXISfOCC2vazG62dS\nPassword: Cf0gtHwKWa3qhgQ7E8Rd'; // Change this to your actual Username and Password.
            popup.style.display = 'flex';
        }
    
        function unlockPage() {
            const popup = document.getElementById('popup');
            const popupContent = document.querySelector('.popup-content');
            popupContent.textContent = 'Data security checks are ongoing, please wait!';
    
            popup.style.display = 'flex';
    
            let countdown = 60;
            const interval = setInterval(() => {
                popupContent.textContent = `Your link is being processed, please wait! (${countdown} seconds remaining)`;
                countdown--;
    
                if (countdown < 0) {
                    clearInterval(interval);
                    // Display the Username and Password after countdown finishes
                    showUsernamePassword();
                }
            }, 1000);
        }