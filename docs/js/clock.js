function updateClock() {
        const options = { timeZone: 'Asia/Manila', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const time = new Date().toLocaleTimeString('en-US', options);
        document.getElementById('clockText').textContent = time; // Update the text path
    }

    setInterval(updateClock, 1000);
    updateClock();  