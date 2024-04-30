 export function CalcDay(seconds) {
    var now = new Date();
    var past = new Date(seconds);

    var difMil = now - past;
    var secDif = Math.floor(difMil / 1000);
    var minDif = Math.floor(secDif / 60);
    var hourDif = Math.floor(minDif / 60);
    var dayDif = Math.floor(hourDif / 24);

    if (dayDif > 0) {
        return dayDif + " day before";
    } else if (hourDif > 0) {
        return hourDif + " hour before";
    } else if (minDif > 0) {
        return minDif + " minute before";
    } else {
        return secDif + " seconds before";
    }
}