


function interpolation(object) {
    let start = object["start"]
    let v = (object["end"] - object["start"]) / object["step"]
    let i = 0
    let x= start
    console.log("v", v);
    while (i < object["step"]) {
        console.log(x, findEquation(object, x,v));
        setTimeout(() => {
            object.callback([x, findEquation(object, x,v)])
        }, v)
        i++
        x=Math.round((x+v)*100)/100
    }



}


// interpolation in maths 
function findEquation(object, x_to_find, v) {
    const start = object["start"]
    const f_start =   object["duration"]/ object["step"]
    const end = start +((object["step"]-1)*v)
    const f_end = object["duration"]
    let f_x_to_find = (((f_end - f_start) / (end - start)) * (x_to_find - start)) + f_start
    return Math.round(f_x_to_find * 100) / 100

}


let callback = ([x, y]) => console.log(x, y)
let obj = { step: 5, start: 6, end: 2, duration: 6, waitTime: 10 , callback}
console.log("hadi", interpolation(obj));