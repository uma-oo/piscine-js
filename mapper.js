

function map(array_data, func) {
    let new_array = []

    for (let i = 0; i < array_data.length; i++) {
        new_array.push(func(array_data[i], i, array_data))
    }
    return new_array
}


function flatMap(array_data, func) {
    let new_array = []
    for (let i = 0; i < array_data.length; i++) {
        new_array.push(func(array_data[i], i, array_data))
    }
    return flat(new_array)
}



function flat(array_data, depth = 1) {
    let new_array = []
    while (depth >=1) {
        for ( let i=0 ; i<array_data.length; i++){
            if (Array.isArray(array_data[i])) {
                new_array.push(...array_data[i])
            } else {
                new_array.push(array_data[i])
            }
            depth--
        }
      
    }
   return new_array
}











console.log(flatMap([1, 2, 3], (n) => [n, n]));

