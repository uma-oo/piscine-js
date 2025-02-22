


function multiply(a, b) {
    let result = 0
    let sign = 1
    if (a < 0) {
        sign = -1

    } else if (b < 0) {
        b = -(b)
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
    } else if (a < 0) {
        a = -(a)
        sign = -1
    }
    while (a - b >= 0) {
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


console.log(multiply(5, 3))
console.log(divide(-15, -5))
console.log(modulo(9, 5))
console.log(multiply(123, -22))
console.log(modulo(20, 4))