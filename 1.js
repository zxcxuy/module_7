const person = {name:"John", age:"32"};
function printInfo(a, b){
  console.log(`Name: ${a}, Age: ${b}`)
}
const logPerson = printInfo.call(person, person.name, person.age)