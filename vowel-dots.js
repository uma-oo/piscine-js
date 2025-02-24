



// function vowelDots(str){
//   
//     let vowelsArray= str.match(vowels)
//     let new_str=""
//     for (let char of str){
//         if ( vowelsArray!== null && vowelsArray.includes(char)){
//           new_str+=char+'.'
//         } else {
//             new_str+=char
//         }
//     }
//     return new_str
// }



const  vowels = /[aAoOeEuUiI]/g
function vowelDots(str){
    return str.replace(vowels, "$&.")
}

console.log(vowelDots("a"))