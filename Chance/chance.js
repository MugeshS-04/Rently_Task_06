const chance = require('chance')

let count = 1
let dice = 0

while(dice != 6)
{
    dice = chance().d6()
    console.log("Die landed on "+dice+" -> "+count +" times tried !")
    count++
}
    
console.log("After trying "+(count - 1)+" times, Finally the die rolled to 6!")

console.log(chance().address())
console.log(chance().age())
console.log(chance().paragraph())
console.log(chance().timestamp())
let date = new Date(chance().timestamp())
console.log(date.toLocaleString())

let ch1 = new chance("Hello", "123")
let ch2 = new chance("Hello", "123")
console.log(ch1.age() + " " + ch2.age())

console.log(ch1.seed +" "+ ch2.seed)