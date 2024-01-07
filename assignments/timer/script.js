let timer;
        let minutesInput = document.getElementById('minutes');
        let timerDisplay = document.getElementById('timer');
        let notificationModal = document.getElementById('notification-modal');

        function startTimer() {
            let minutes = parseInt(minutesInput.value);
            let seconds = minutes * 60;

            timer = setInterval(function () {
                if (seconds <= 0) {
                    stopTimer();
                    displayNotificationModal();
                } else {
                    let minutesDisplay = Math.floor(seconds / 60);
                    let secondsDisplay = seconds % 60;

                    timerDisplay.textContent = `${minutesDisplay < 10 ? '0' : ''}${minutesDisplay}:${secondsDisplay < 10 ? '0' : ''}${secondsDisplay}`;
                    seconds--;
                }
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timer);
        }

        function resetTimer() {
            stopTimer();
            timerDisplay.textContent = '00:00';
            minutesInput.value = '5'; // Reset the input to default value
        }

        function displayNotificationModal() {
            notificationModal.style.display = 'flex';
        }

        function closeModal() {
            notificationModal.style.display = 'none';
        }