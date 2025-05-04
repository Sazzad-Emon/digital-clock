function updateClock() {
    var now = new Date(); //This creates a Date object called now.It stores the current date and time from your computer.
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add 0 in front if < 10
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
  
    var time = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("clock").innerHTML = time;
  }
  
  // Update every second Calls the updateClock() function every 1000 milliseconds (1 second).This is what keeps the clock live and ticking.
  setInterval(updateClock, 1000);
  