


function slice(to_be_sliced, start = 0, end = to_be_sliced.length) {
    if ((end < 0) && (start < 0)) {
        end = end + to_be_sliced.length
        start = start + to_be_sliced.length
    } else if (end < 0) {
        end = end + to_be_sliced.length
    } else if (start < 0) {
        start = start + to_be_sliced.length
    }
    let result
    if (typeof to_be_sliced === "string") {
        result = ""
        for (let i = start; i < end; i++) {
            result += to_be_sliced[i]
        }
        return result
    } else {
        result = []
        let j = 0
        for (let i = start; i < end; i++) {
            result[j] = to_be_sliced[i]
            j += 1
        }
        return result
    }


}

