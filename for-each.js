


function forEach(array_data, func) {
    for (let i = 0; i < array_data.length; i++) {
        func(array_data[i], i, array_data)
    }

}



