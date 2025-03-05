



function pick(object, arr_or_arr_str) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        for (let ele of arr_or_arr_str) {
            if (ele === key) {
                new_object[key] = value
            }
        }

    }
    return new_object

}



function omit(object, arr_or_arr_str) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        for (let ele of arr_or_arr_str) {
            if (ele !== key) {
                new_object[key] = value
            }
        }

    }
    return new_object
}