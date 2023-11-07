import { User } from "./chap1exo01";

const students : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;
const alphabet:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
let groups:object= {}
console.log(students.length)

function createRandom(){
    let randomNumber = students[Math.floor(Math.random()*students.length)]
    let nameLetters = Math.floor(Math.random()*(8-2)+2)
    let randomName:string[] = []
    for (let i = 0; i < nameLetters; i++) {
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)]
        randomName.push(letter)

    }

    let student1:User ={
        name: randomName.join(''),
        id: randomNumber
    }

    students.splice(students.indexOf(randomNumber),1)

    return student1
}

let i = 1

while (students.length) {
    
    let groupNumber = "Group " + (i)
    i++
    let group:User[]
    let student = createRandom()
    group = [student]
    student = createRandom()
    group.push(student)
    console.log(students)

    groups[groupNumber] = group
    
}

console.log(groups)