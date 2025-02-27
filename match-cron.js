


function matchCron(string, date_object){
   let values = string.split(" ")
    console.log(values);
     if (isValidFormat(string)){
        return (values[0]==date_object.getMinutes()|| values[0]==="*") &&
         (values[1]==date_object.getHours() || values[1]==="*") && 
        (values[2]==date_object.getDate() || values[2]==="*") && 
        (values[3]==date_object.getMonth()+1 ||  values[3]==="*") && 
        (values[4]==date_object.getDay() || values[4]==="*")
     }
   


}


console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')));




function isValidFormat(string){
 let values = string.split(" ")
 if(
    (parseInt(values[0])>=0 && parseInt(values[0])<=59 || values[0]==="*") 
    && ((parseInt(values[1])>=0 && parseInt(values[1])<=23 || values[1]==="*")) 
    && (parseInt(values[2])>=1 && parseInt(values[2])<=31 || values[2]==="*") && 
    (parseInt(values[3])>=1 && parseInt(values[3])<=12 || values[3]==="*") && 
    (parseInt(values[4])>=1 && parseInt(values[4])<=7 || values[4]==="*")){
  return true
 }
 return false 

}