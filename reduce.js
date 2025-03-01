

function fold(array_data, func, accumulator) {
    for (let i = 0; i < array_data.length; i++) {
        accumulator = func(accumulator, array_data[i], i, array_data)
    }
    return accumulator
}



function foldRight(array_data, func, accumulator) {
    for (let i = array_data.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, array_data[i], i, array_data)
    }
    return accumulator

}


function reduce(array_data, func, accumulator = 0) {
    if (array_data.length < 1) {
        throw new Error("")
    } else {
        let res = fold(array_data, func, accumulator)
        return res
    }

}

function reduceRight(array_data, func, accumulator=0) {
    if (array_data.length < 1) {
        throw new Error("")
    } else {
        let res = foldRight(array_data, func, accumulator)
        return res
    }
}


const adder = (a, b) => a + b
console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)
