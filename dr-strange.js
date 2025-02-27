




function addWeek(date){
    const days =["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
        ]
    const epoch = new Date("0001-01-01")
    let diff_of_time_s = (date-epoch)/1000
    let days_after=diff_of_time_s/(24*60*60)
    let res=days_after%14
   return days[res]
}


// https://stackoverflow.com/questions/63985383/how-can-i-add-time-to-datetime-using-javascript
// stackoverflow huwa l7uuuuuuuuuub l2abaaaaaaaaadi 

// console.log(object.date)
// let time = ((object.hour*3600)+(object.minute*60)+object.second)*1000
// let date_updated= new Date(object.date+ 'GMT+1')
// return new Date(date_updated +time+'GMT+1')

function timeTravel(object){
    object.date= new Date(object.date.setHours(object.hour, object.minute, object.second))
    return object.date
}


// timeTravel({ date, hour, minute, second })

console.log("RESULT",timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString())
  
  // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)

console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
console.log(addWeek(new Date('0001-01-07')))// Output: Sunday
console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
console.log(addWeek(new Date('0001-01-09')))// Output: secondTuesday