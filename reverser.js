
function reverse(data) {
    if (typeof data === "string") return reverseString(data)
    else return reverseArray(data)
}


function reverseString(str) {
    let new_str = ""
    for (let i = str.length-1; i >= 0; i--) {
        new_str += str[i]
    }
    return new_str
}

function reverseArray(array) {
    const new_array=[]
    for (let i = array.length-1; i >= 0; i--){
        new_array.push(array[i])
    }
    return new_array
}
