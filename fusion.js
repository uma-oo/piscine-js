


function fusion(object1, object2) {
    let new_object = {}
    for (let [key, value] of Object.entries(object1)) {
        if ((key in object2)) {
            if (checkType(object1[key], object2[key])) {
                res = handleTypes(object1[key], object2[key])
                if (res === "nested") {
                    res = fusion(object1[key], object2[key]) 
                }
                new_object[key] = res
            }
        } else {
            new_object[key] = value
        }
    }

    for (let [key, value] of Object.entries(object2)) {
        if (!(key in object1)) {
            new_object[key] = value
        }
    }
    return new_object
}



function checkType(value1, value2) {
    return typeof value1 === typeof value2
}


function handleTypes(value1, value2) {
    switch (typeof value1) {
        case "string":
            return `${value1} ${value2}`
        case "number":
            return value1 + value2
        case "object":
            console.log("hna ");
            if (Array.isArray(value1)) {
                let new_array = [...value1, ...value2]
                return new_array
            }
            return "nested"

    }
}






