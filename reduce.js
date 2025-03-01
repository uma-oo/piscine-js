

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


function reduce(array_data, func, accumulator) {
    if (array_data.length < 1) {
        throw new Error("")
    } else {
        if (!accumulator) {
            accumulator = array_data[0]
        }
        let res = fold(array_data.slice(1), func, accumulator)
        return res
    }

}

function reduceRight(array_data, func, accumulator) {
    if (array_data.length < 1) {
        throw new Error("")
    } else {
        if (!accumulator) {
            accumulator = array_data[array_data.length-1]
        }
        let res = foldRight(array_data.slice(0,array_data.length-1), func, accumulator)
        return res
    }
}








