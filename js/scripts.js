
function countDown() {
    const xmasTime = "24 Dec 2023";
    var daysEl = $("#days");
    var hoursEl = $("#hours");
    var minsEl = $("#mins");
    var secondsEl = $("#seconds");
    const xmasDate = new Date(xmasTime);
    const currentDate = new Date();

    const totalSeconds = (xmasDate - currentDate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    $(daysEl).html(String(days));
    $(hoursEl).html(String(hours));
    $(minsEl).html(String(mins));
    $(secondsEl).html(String(seconds));
 
    console.log();
}
 

window.onload = function () {
    countDown();
    setInterval(countDown, 1000);
}
