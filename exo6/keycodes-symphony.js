


export function compose() {
    let colors = {
        "a": "#FF0000 ",
        "b": "#0000FF",
        "c": "#00FFFF",
        "d": "#006400 ",
        "e": "#FFFF00",
        "f": "#FF00FF",
        "g": "#008000",
        "h": "#FF69B4",
        "i": "#4B0082",
        "j": "#00A86B",
        "k": "#F0E68C",
        "l": "#E6E6FA ",
        "m": "#FF00FF",
        "n": "#000080",
        "o": "#FFA500",
        "p": "#800080",
        "q": "#B0C4DE",
        "r": "#FF4500",
        "s": "#C0C0C0",
        "t": "#008080",
         "u" :"#8B4513" ,
         "v":"#EE82EE",
         "w": "#F5DEB3" ,
         "x" : "#F6EB61" ,
         "y" :"#9ACD32",
         "z" : "#7C7C7C" ,
         "Space": "#FFFFFF" ,
    }




document.addEventListener("keydown", (event) => {

    let new_div
    switch (event.key) {
        case "Escape":
            let all_divs = document.querySelectorAll("div")
            for (let div of all_divs) {
                div.remove()
            }
        case "Backspace":
            if (document.body.lastChild) {
                document.body.lastChild.remove()
            }
            break;
        default:
            new_div = document.createElement("div")
            new_div.className = "note"
            new_div.innerText = event.key
            let key_value = event.key
            new_div.style.backgroundColor= colors[key_value]
            document.body.append(new_div)
            break;
    }

});


}