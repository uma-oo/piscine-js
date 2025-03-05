



function pick(object, arr_or_arr_str) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        if (arr_or_arr_str.includes(key)) {
            new_object[key] = value

        }
    }
    return new_object

}



function omit(object, arr_or_arr_str) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        if (!arr_or_arr_str.includes(key)) {
            new_object[key] = value

        }
    }
    return new_object
}