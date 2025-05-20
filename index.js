function updateClock() {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + (5.5 * 3600000));

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const seconds = istTime.getSeconds();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6;
  const hourAngle = ((hours % 12) * 30) + (minutes / 2);

  document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;

  const formattedTime = `${String(displayHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
  document.getElementById('indianTime').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();
