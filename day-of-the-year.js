




function dayOfTheYear(date_object) {
    let sum = 1
    let start_year = date_object.getUTCFullYear();
    var start_date = new Date(start_year); start_date.setUTCFullYear(start_year);
    console.log(start_date);
    while (date_object.getMonth() !== start_date.getMonth() || date_object.getDate() !== start_date.getDate()) {
        start_date.setDate(start_date.getDate() + 1)
        sum += 1
    }

    return sum
}

console.log(dayOfTheYear(new Date('0001-01-05')));  