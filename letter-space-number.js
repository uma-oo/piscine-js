






function letterSpaceNumber(str){
 const re = /([a-zA-Z]\s{1}\d{1}(?=\s|$|[^a-z-A-Z-0-9]))/g
 const myArray = str.match(re);
 if (myArray===null) return []
 return myArray
}


console.log(letterSpaceNumber('example 1, example 2'))