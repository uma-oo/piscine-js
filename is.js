
const is = {}

function num(argument) {
    return typeof (argument) === "number" ? true : false;
}

function nan(argument){
    return typeof(argument)=== "number" && argument===NaN ? true : false
}

console.log(num(5))
console.log(nan(NaN))
console.log(typeof(NaN))
console.log(NaN)