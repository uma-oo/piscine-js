
function split(str, sep="") {
    let new_array = []
    let words=""
    for (let i=0; i<str.length;i++){
        console.log(str.slice(i, i+sep.length))
        if(str.slice(i, i+sep.length) !==sep ){
           words=words+str.slice(i, i+sep.length)
           console.log("words", words)
           i=i+sep.length-1
        } else {
            new_array.push(words)
            words=""
            i=i+sep.length-1
        }
    }
   if (words!=="") {
      new_array.push(words)
   }

    return new_array

}


function join(array, sep = " ") {
    let new_str = ""
    for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1) {
            new_str += array[i] + sep 
        }else {
            new_str+= array[i]
        }

    }
    return new_str
}



console.log(split('ee,ff,g,', ','))
console.log(split('rrirr', 'rr'))