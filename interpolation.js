


function interpolation(object) {
    let start = object["start"]
    let gap_x = (object["end"] - object["start"]) / object["step"]
    let gap_y = object["duration"] / object["step"]
    console.log(start);
    console.log(gap_x);
    console.log(gap_y);
    for (let i = 1; i <= object["step"]; i++) {
        setTimeout(() => {
            object.callback([(Math.round(start*100)/100), Math.round(gap_y * i*100)/100])
            start += gap_x
        }, gap_y * i);
    }


}




let callback = ([x, y]) => console.log(x, y)
let obj = { step: 5, start: 6, end: 2, duration: 6, waitTime: 10, callback }
console.log("hadi", interpolation(obj));