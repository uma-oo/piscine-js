

function slice(to_be_sliced, start = 0, end = to_be_sliced.length) {
    let real_end= to_be_sliced.length
    let result
    if ((end < 0) && (start < 0)) {
        end = end + to_be_sliced.length
        start = start + to_be_sliced.length
    } else if (end < 0) {
        end = end + to_be_sliced.length
    } else if (start < 0) {
        start = start + to_be_sliced.length
        if( start<0){  // stills negative ;)
            start=0
        }
    }
    if( real_end!==end ){
        if (end>real_end){
            end=real_end
        }
    }
    result = ""
    for (let i = start; i < end; i++) {
        result += to_be_sliced[i]
    }
    return result
}







function cutFirst(string) {
    return slice(string, 2)

}

function cutLast(string) {
    return slice(string, 0, -2)
}


function cutFirstLast(string) {
    return slice(string, 2, -2)
}

function keepFirst(string) {
    return slice(string, 0,2)
}

function keepLast(string) {
    return slice(string,-2)
}

function keepFirstLast(string) {
    if (string.length<4){
        return string
    }
    return slice(string,0,2)+slice(string,-2)
}

