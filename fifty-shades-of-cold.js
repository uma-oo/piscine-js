
import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    let style_tag = document.createElement("style")

    for (let color of colors) {
        style_tag.innerHTML=style_tag.innerHTML+ `
    .${color} {
    background : ${color};
    }
    `
    }
    document.head.appendChild(style_tag)
}


export function generateColdShades() {
   let array = ["qua", "blue", "turquoise", "green", "cyan", "navy" , "purple"]
   for (let color of colors) {
        for (let chosen_color of array){
            if (color.includes(chosen_color)){
                let new_div = document.createElement("div")
                new_div.className= color
                new_div.innerText= color
                document.body.append(new_div)
            }
        }
        
   }

}


export function choseShade(shade_color){
    let all_divs= document.querySelectorAll("div")
    for ( let div of all_divs){
        div.classList.replace(div.className, shade_color)
    }
}