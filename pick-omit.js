



function pick(object, arr_or_arr_str) {
    let new_object = {}
    let is_array = Array.isArray(arr_or_arr_str)
    for (let [key, value] of Object.entries(object)) {
        if (is_array) {
            for (let ele of arr_or_arr_str) {
                if (ele === key) {
                    new_object[key] = value
                }
            }
        } else {
            if (arr_or_arr_str === key) {
                new_object[key] = value
            }
        }
    }
    return new_object

}



function omit(object, arr_or_arr_str) {
    let new_object = {}
    let is_array = Array.isArray(arr_or_arr_str)
    for (let [key, value] of Object.entries(object)) {
        if (is_array) {
            for (let ele of arr_or_arr_str) {
                if (ele !== key) {
                    new_object[key] = value
                }
            }
        } else {
            if (arr_or_arr_str !== key) {
                new_object[key] = value
            }
        }
    }
    return new_object
}


// let user = {
//     agent: {
//         firstName: 'James',
//         lastName: 'Bond',
//         age: 25,
//         email: 'jamesbond@hotmail.com',
//     },
//     newAgent: { firstName: 'James', lastName: 'Bond' },
//     car: { brand: 'ford', motor: 'v8', year: 2000 },
//     newCar: { brand: 'ford', year: 2000 },
//     user: { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false },
//     newUser: { ageVerified: false },
//     computer: { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' },
//     tools: { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' },
//     newtool: { drill: 'bosh' },
//     games: { board: 'monopoly', cards: 'poker', dice: 'roulette' },
//     newgames: { dice: 'roulette' },
//     language: { England: 'english', Spain: 'spanish', Portugal: 'portuguese' },
//     newlanguage: { England: 'english', Portugal: 'portuguese' },
//     phone: { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' },
// }



// console.log(omit(user.tools, ['grinders', 'saws']));
