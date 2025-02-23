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
    if (value) {
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
    if (reminder > 0) return integer_part + 1
    else if (reminder < 0 && -(reminder) > 0) return integer_part
    else if (reminder === 0) return integer_part
    else if (reminder < 0 && -reminder > 0) return integer_part
}


function floor(number) {
    let integer_part = divide(number, 1)
    let reminder = modulo(number, integer_part)
    if (integer_part >= 0 && reminder !== 0) return integer_part
    else if (reminder < 0 && -(reminder) > 0.5) return integer_part - 1
    else if (integer_part < 0 && reminder !== 0) return integer_part - 1
    return integer_part
}

function trunc(number) {
    const [integer , to_be_added]=optimize(number)
    let integer_part = divide(integer, 1)
    let reminder = modulo(number, integer_part)
    if (reminder < 0 && -(reminder) > 0) return integer_part+to_be_added
    return integer_part+to_be_added
}

function optimize(number) {
    let sign = 1
    if (number < 0) {
        number = -number
        sign = -1
    }

    if (number >= 10000) {
        let integer_part = 0
        let to_be_added = 0
        while (number >= 10000) {
            to_be_added = to_be_added + 10000
            integer_part = number - 10000
            number = number - 10000
        }
        if (sign === 1) return [integer_part, to_be_added]
        else return [-integer_part, -to_be_added]

    } else {
        if (sign === 1) return [number, 0]
        else return [-number, 0]
    }
}




