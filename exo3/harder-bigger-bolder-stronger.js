



const random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }



export function generateLetters(){
    const  alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    for (let i =1; i<=120; i++){
        let index = random(0, alphabet.length-1)
        let div = document.createElement("div")
        div.innerText = alphabet[index]
        div.style.fontSize=`${i+10}px`
        console.log("size",`${i+10}px`);
        if (i<=40){
            div.style.fontWeight=300
        } else if (i<=80){
            div.style.fontWeight=400
        }else {
            div.style.fontWeight=600
        }
        document.body.append(div)
    }

}