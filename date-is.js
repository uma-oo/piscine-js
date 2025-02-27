

// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
function isValid(date_object) {
    let converted

    if (date_object instanceof Date) {
        converted = date_object
    } else if ( typeof date_object ==="number"){
        converted = new Date(date_object)
    } else {
        converted=date_object
    }

    if (converted.getDate && converted!="Invalid Date"){
       return true
    } else return false
}


function isAfter(date_first, date_second) {

    return date_first>date_second

}

function isBefore(date_first, date_second) {
    return date_first<date_second
}


function isFuture(date_object) {
   return isValid(date_object) && date_object>Date.now()
}


function isPast(date_object) {
    return isValid(date_object) && date_object<Date.now()
}


console.log(Date.now())
console.log(typeof Date.now())
console.log(isValid(Date.now()))