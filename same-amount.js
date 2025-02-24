
function sameAmount(string , regex1, regex2){
    regex1=new RegExp(regex1, "g")
    regex2=new RegExp(regex2, "g")
    let array1= string.match(regex1);
    let array2=string.match(regex2);
    if (array1!==null && array2!==null){
        if (array1.length===array2.length) return true
        return false
    }
    return false
}






