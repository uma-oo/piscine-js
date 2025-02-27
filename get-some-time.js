function firstDayWeek(number, string) {
    const stable_year = new Date(string)
    const year = new Date(string)
    if (number >= 1 && number <= 53) {
        let after_number_of_weeks = year.setDate(year.getDate() + ((number - 1) * 7))
        let date_stable = new Date(after_number_of_weeks)
        let date = date_stable
        let day = date.getUTCDay()
        let i= 0
        while (day !== 1 && date.getUTCDate() !== 1) {
            date = new Date(year.setUTCDate(date_stable.getUTCDate() - i))
            day = date.getUTCDay()
            i+=1
        }
        return format(date)
    }




}

// hadi done
function format(date_object) {
    let date_str = date_object.toISOString()
    let date_with_dashes = date_str.split("T")
    let date = date_with_dashes[0].split("-")
    return date.reverse(date).join("-")

}




