







function isLeapYear(year) {
    let is_leap = false
    if (year % 100 == 0) {
        if ((year % 400 == 0)) {
            is_leap = true
        }
    } else if (year % 4 == 0) {
        is_leap = true
    }

    if (is_leap) return true
    else return false

}



function countLeapYears(date_object) {
    let sum = 0
    for (let year = new Date("0001-01-01").getFullYear(); year < date_object.getFullYear(); year++) {
        if (isLeapYear(year) && year!==0) {
            sum++
        }
    }
    return sum
}

console.log(countLeapYears(new Date('1664-08-09')))