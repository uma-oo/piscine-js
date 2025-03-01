


function longWords(array_data){
    return array_data.every(
        function (element){
        return typeof element ==="string" && element.length>=5
        }
    )

}


function oneLongWord(array_data){
 return array_data.some(
    function (element){
        return typeof element ==="string" && element.length>=10
        }
 )
}


function  noLongWords(array_data){
    return array_data.every(
        function ( element){
            return typeof element ==="string" && element.length<7
        }
    )

}



console.log(longWords(["lam", "oumayma"]));
console.log(oneLongWord(["lam", "oumaymatoun"]));
console.log(noLongWords(["salam"]));