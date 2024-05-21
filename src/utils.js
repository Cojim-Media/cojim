
/**
 * This function formats date properly
 * similar to diffForHumans() function in Laravel
 */
export const getTimeAgo = (date) => {
    const MINUTE = 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    WEEK = DAY * 7,
    MONTH = DAY * 30,
    YEAR = DAY * 365

const secondsAgo = Math.round((+new Date() - date) / 1000)
let divisor = null
let unit = null

if (secondsAgo < MINUTE) {
    return secondsAgo + " seconds ago"
} else if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'minute']
} else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'hour']
} else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'day']
} else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'week']
} else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'month']
} else if (secondsAgo > YEAR) {
    [divisor, unit] = [YEAR, 'year']
}

let count = Math.floor(secondsAgo / divisor)
return `${count} ${unit}${(count > 1) ? 's' : ''} ago`
}
