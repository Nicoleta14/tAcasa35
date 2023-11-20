
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('dateInput');
    const showTimeBtn = document.getElementById('showTimeBtn');
    const timeRemaining = document.getElementById('timeRemaining');


    dateInput.min = new Date().toISOString().split("T")[0];

    showTimeBtn.addEventListener('click', function() {
        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();
        
        if (selectedDate > currentDate) {
            const timeDiff = selectedDate - currentDate;
            const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            timeRemaining.innerHTML = daysRemaining + ' Zile ramase pina la  ' + dateInput.value;
        } 
    });
});