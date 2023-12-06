//Day 29
function convertDaysToHoursMinutesSeconds(days) {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    let totalSeconds = days * hoursInDay * minutesInHour * secondsInMinute;
    let hours = Math.floor(totalSeconds / (minutesInHour * secondsInMinute));
    totalSeconds %= minutesInHour * secondsInMinute;
    let minutes = Math.floor(totalSeconds / secondsInMinute);
    totalSeconds %= secondsInMinute;
    let seconds = totalSeconds;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
let days = parseInt(prompt('Enter the number of days:'));
let result = convertDaysToHoursMinutesSeconds(days);
console.log(`${days} days is equal to:`);
console.log(`${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds.`);
