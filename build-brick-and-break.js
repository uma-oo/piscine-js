
var i = 0

export function build(number_of_bricks) {

    let started = setInterval(() => {
        i++
        if (i >= number_of_bricks) {
            clearInterval(started)
        }
        const newDiv = document.createElement("div")
        newDiv.setAttribute('id', `brick-${i}`)
        if (i % 2 === 0) {
            newDiv.setAttribute("data-foundation", true)
        }
        document.body.append(newDiv)
    }, 100)
}





export function repair(...array_ids) {
    for (let element of array_ids) {
        let element_got = document.getElementById(element)
        if (element_got.getAttribute("data-foundation") === "true") {
            element_got.setAttribute("data-repaired", "in progress")
        } else {
            element_got.setAttribute("data-repaired", true)
        }
    }
}

export function destroy() {
    let element_to_delete =document.body.lastChild
    element_to_delete.remove()
}