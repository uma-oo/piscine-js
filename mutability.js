
const clone1 = {
    name:person.name,
    age:person.age,
    country: person.country
}
const clone2 = {
    name:person.name,
    age:person.age,
    country: person.country
}
Object.freeze(clone1)
Object.freeze(clone2)

const samePerson = person


console.log(clone1===clone2)

person.age+=1
person.country='FR'






