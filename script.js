var day = new Date(2022, 04, 23, 19, 50);

function formatTime(r) {
    let leftTime = new Date(r);

    let month = leftTime.getUTCMonth() - 1;
    month = (month < 10) ? ('0' + month) : month;
    let d = leftTime.getUTCDate() - 1;
    d = (d < 10) ? ('0' + d) : d;
    let h = leftTime.getUTCHours();
    h = (h < 10) ? ('0' + h) : h;
    let min = leftTime.getUTCMinutes();
    min = (min < 10) ? ('0' + min) : min;
    let s = leftTime.getUTCSeconds();
    s = (s < 10) ? ('0' + s) : s;

    let leftTimeS = `${month} : ${d} : ${h} : ${min} : ${s}`;
    return leftTimeS;
}

var timer = setInterval(function goTimer() {
    let now = new Date();
    if ((day.getTime() - now.getTime()) <= 0) {
        clearInterval(timer);
        return;
    }
    document.getElementById('timer').innerHTML = formatTime(day.getTime() - now.getTime());
}, 1000);