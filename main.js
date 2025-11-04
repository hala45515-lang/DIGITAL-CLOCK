document.write(`
    <div class="clock-container">
      <h2>🕒 DIGITAL CLOCK</h2>
      <div id="clock">00:00:00</div>
      <div id="day">Monday</div>
      <div id="date">01-01-2025</div>
    </div>
  `);


  function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
   
    
    // إضافة أصفار أمام الساعات والدقائق والثواني
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
   
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  
    // عرض اسم اليوم
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];
    document.getElementById("day").textContent = dayName;
  
    // Date
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
  
    // إضافة أصفار أمام اليوم والشهر
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
  
    document.getElementById("date").textContent = `${day}-${month}-${year}`;
  }

//clock updates every second
  updateClock();
  setInterval(updateClock, 1000);