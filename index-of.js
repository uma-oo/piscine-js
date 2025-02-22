

function indexOf(array , value, start=0){
  let result=-1
   for (let i=start; i<array.length; i++){
        if (array[i]===value){
            result=i
            break
        }
        
   }
   return result

}


function lastIndexOf(array , value, start=0){
    let result=-1
   for (let i=start; i<array.length; i++){
        if (array[i]===value){
            result=i
        }
        
   }
   return result

}

function includes(array , value){
    let result=false
    for (let i=start; i<array.length; i++){
         if (array[i]===value){
             result=true
             break
         }
         
    }
    return result

}

console.log(indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison', 2))
console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'], "Dodo"))

console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'], "Tiger", 2))