

function isFriday(date_object) {
    return date_object.getDay()===5

}


function isWeekend(date_object) {
    return date_object.getDay() === 0 || date_object.getDay() === 6
}


function isLeapYear(date_object) {
    let is_leap = false
    if (date_object.getYear() % 100 == 0) {
        if ((date_object.getYear() % 400 == 0)) {
            is_leap = true
        }
    } else if (date_object.getYear() % 4 == 0) {
        is_leap=true
    }

    if (is_leap) return true 
    else return false 

}

function isLastDayOfMonth(date_object) {
  let original_month = date_object.getUTCMonth()
  let day_after = new Date(date_object.setDate(date_object.getUTCDate()+1))
  return day_after.getUTCMonth()!==original_month
   
}



console.log(isLastDayOfMonth(new Date('2020-02-29')));
console.log(isLastDayOfMonth(new Date('2020-12-30')));
console.log(isLastDayOfMonth(new Date('2020-12-30')));