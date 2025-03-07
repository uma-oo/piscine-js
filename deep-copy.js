


function deepCopy(object) {
    switch (Array.isArray(object)) {
        // hna hadi array 
        case true:
            return copyArray(object)
        case false:
            return copyObject(object)

    }

}


function copyArray(array) {
    let new_array = []
    for (let element of array) {
        if (typeof element === "object" && Array.isArray(element)) {
            new_array.push(copyArray(element))

        } else {
            new_array.push(element)
        }
    }
    return new_array
}

function copyObject(object) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        console.log(key);
        if (typeof value === "object" && !Array.isArray(value)) {
            new_object[key] = copyObject(value)
        } else if (typeof value === "object" && Array.isArray(value)) {
            new_object[key] = copyArray(value)
        } else {
            new_object[key] = value
        }
    }
    return new_object
}



let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    style: {
        1: "black",
        2: "pink"
    }
}

let new_employe = deepCopy(employee)
new_employe.ename = "oumayma"
new_employe.style[1] = "green"
console.log(new_employe);
console.log(employee);
