
function split(str, sep = "") {
    let new_array = []
    if (sep === "" ) {
        for (let char of str){
            new_array.push(char)
        }
        return new_array
    }
    let words = ""
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sep.length) !== sep) {
            words = words + str[i]
            console.log(words)
        } else if (i === str.length - sep.length && str.slice(i, i + sep.length) === sep) {
            new_array.push(words)
            words = ""
            i = str.length
            new_array.push("")
        } else {
            new_array.push(words)
            words = ""
            i = i + sep.length - 1
        }
    }

    if (words !== "") {
        new_array.push(words)
    }
    
    if( new_array.length===0){
        new_array.push("")
    }

    return new_array

}


function join(array, sep = " ") {
    let new_str = ""
    for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1) {
            new_str += array[i] + sep
        } else {
            new_str += array[i]
        }

    }
    return new_str
}

