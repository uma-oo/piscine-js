


function ionOut(string) {
    let re = /\w*t(?=(ion))/g
    let words = string.match(re)
    if (words != null && words.length !==0) return words
    return []
}



console.log(ionOut('transfusion'))