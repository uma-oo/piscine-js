//helper functions 


function multiply(a, b) {
    let result = 0
    let sign = 1
    if ((a < 0) && (b < 0)) {
        a = -(a)
        b = -(b)
        sign = 1

    } else if (b < 0) {
        b = -(b)
        sign = -1
    } else if (a < 0) {
        a = -(a)
        sign = -1
    }
    for (let i = 1; i <= b; i++) {
        result += a

    }
    if (sign == 1) {
        return result
    } else {
        return -(result)
    }

}
function isNegativeZero(value) {
    value = +value; // cast to number
    if(value) {
       return false;
    }
    let infValue = 1 / value;
    return infValue < 0;
  }
// integer division operator // hada f python ( z3ma division euclidienne ;)

function divide(a, b) {
    let sign = 1
    let result = 0
    if ((a < 0) && (b < 0)) {
        a = -(a)
        b = -(b)
        sign = 1

    } else if (b < 0) {
        b = -(b)
        sign = -1
    } else if (a < 0 || isNegativeZero(a)) {
        a = -(a)
        sign = -1
    }
    while (a - b >= 0 && b !== 0) { // l9raya na9ssa
        result += 1
        a = a - b
    }
    if (sign == 1) {
        return result
    } else {
        return -(result)
    }

}

function modulo(a, b) {
    return a - multiply(b, divide(a, b))

}



function round(number) {
    if ((number === Infinity) || (number === -Infinity)) {
        return number
    }
    let integer_part = divide(number, 1)
    let reminder = modulo(number, integer_part)
    if (reminder >= 0.5 && reminder >= 0) return integer_part + 1
    else if (reminder < 0 && -(reminder) > 0.5) return integer_part - 1
    return integer_part
}

function ceil(number) {
    if ((number === Infinity) || (number === -Infinity)) {
        return number
    }
    let integer_part = divide(number, 1)
    let reminder = modulo(number, integer_part)
    if (reminder>0) return integer_part + 1
    else if (reminder < 0 && -(reminder) > 0.5) return integer_part - 1
    else if (reminder===0) return integer_part
    else if (reminder<0 && -reminder>0)  return integer_part 
}


function floor(number) {
    let integer_part = divide(number, 1)
    let reminder= modulo(number,integer_part)
    if (integer_part>=0 && reminder!==0) return integer_part
    else if (reminder < 0 && -(reminder) > 0.5) return integer_part - 1
    else if (integer_part<0  && reminder!==0) return integer_part-1
    return integer_part 
}

function trunc(number) {
    let integer_part= divide(number, 1)
    let reminder = modulo(number, integer_part)
    if (reminder < 0 && -(reminder) > 0.5) return integer_part - 1
    return integer_part
}

nums=[3, -3, 2, -2.5, -0]

// console.log(nums.map(round))
// console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
// console.log("************************")

// console.log(nums.map(Math.round))
// console.log(nums.map(Math.floor))
// console.log(nums.map(Math.trunc))
// console.log(nums.map(Math.ceil))



console.log(trunc(-2.5))


