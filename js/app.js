

const countDownTimer = () => {
    const now = new Date().getTime();
    const deadLine = new Date('December 8, 2096 11:59:59').getTime();
    const deadLineTime = deadLine - now;

    let seconds = Math.floor(deadLineTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    seconds %= 60; // seconds = seconds % 60
    minutes %= 60; // minutes = minutes % 60
    hours %= 24; // hours = hours % 60
    days %= 365; // years = years % 365

    years = (years < 10) ? '0' + years : years;
    days = (days < 10) ? '0' + days : days;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    document.getElementById('years').innerText = years;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(countDownTimer, 1000);
