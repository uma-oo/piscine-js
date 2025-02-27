



function sunnySunday(date){
    const days =["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ]
    const epoch = new Date("0001-01-01")
    let diff_of_time_s = (date-epoch)/1000
    let days_after=diff_of_time_s/(24*60*60)
    let res=days_after%6
   return days[res]
}
