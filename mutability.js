const clone1 = {
    name:person.name,
    age:person.age,
    country: person.country
}
const clone2 = clone1
Object.freeze(clone1)
Object.freeze(clone2)

const samePerson = person

person.age+=1
person.country='FR'






