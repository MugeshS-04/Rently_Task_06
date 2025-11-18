//regex Notes

//Flags
//1. global - /g - used to find the matched character or string all over the given text.
//2. case insensitive - /i - used to match the condition irrespective to case
//3. multiLine - /m - used to mention the multiline (mainly used when using ^)


// ?  -> used to match with the preceding char or without it
// +  -> used to match with one or more preceding char
// *  -> comb of both ? and + (zero or more preceding char)
// .  -> used to match any character
// |  -> this or that
// () -> used for grouping
// [] -> used to match the char inside it
// {} -> used to mention min and max length
// \  -> used as escape char for using some symbols as matching char
// ^  -> used to match the starting point
// $  -> used to mention that the string is finished


// \w - used to match any word with alphabets
// \W - inverse of w, used to match any non words
// \s - used to match any whitespaces
// \S - inverse of S, used to match any non whitespaces
// \d - used to match the digits

//positive look behind  - (?<=) - used to check the chars with preceding conditions
//negative look behind  - (?<!) - inverse of positive look behind
//positive look ahead   - (?=)  - used to check the chars with succeding conditions
//negative look ahead   - (?!)  - inverse of positive look ahead


//regex for basic email format    -> (?<unique_username>[a-z0-9].*\.?[a-z0-9].*)(?<domain>@[a-z].*)(?<TLD>\.(com|edu|in))
//regex for basic password format -> (?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$*(){}]).{8,}$



const email = "mugesh.s@rently.com"
const password = "ABCD@!12304"

const em_regex = new RegExp("[a-z0-9].*\.?[a-z0-9].*@[a-z].*\.com$");
console.log(em_regex.test(email))