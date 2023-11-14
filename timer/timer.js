$(document).ready(function() {
    // This function is called when the document is fully loaded and ready
    var timer;
    var countdown = 0;

    $('#startTimer').click(function () {
        var timeInSeconds = parseInt($('#timerInput').val());
        if (!isNaN(timeInSeconds)) {
            // Check if the input is a valid number
            countdown = timeInSeconds;
            updateTimerDisplay();

            if (timer) {
                // If there is an existing timer, clear it
                clearInterval(timer);
            }

            timer = setInterval(function () {
                // Set an interval to update the countdown every second
                countdown--;
                updateTimerDisplay();

                if (countdown <= 0) {
                    clearInterval(timer);
                    alert('Timer expired!');
                }
            }, 1000);  // Interval of 1000 milliseconds (1 second)
        }
    });

    $('#resetTimer').click(function () {
        clearInterval(timer);
        countdown = 0;
        updateTimerDisplay();
    });

    function updateTimerDisplay() {
        $('#timerValue').text(countdown); // Update the countdown value in the HTML
    }
});
