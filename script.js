let persons = [
{
    firstName: "giorgi",
    lastName: "sarkisyan",
    age: 30,
    profession: "Web Developer",
    score: 3,
},
{
    firstName: "luka",
    lastName: "tskhadaia",
    age: 22,
    profession: "Digital Marketing",
    score: 1.2,
},
{
    firstName: "atuli",
    lastName: "maisashvili",
    age: 24,
    profession: "Lumberjack",
    score: 4.2
}
];
const namesArr = persons.map(person => `${person.firstName} ${person.lastName}`);
console.log(namesArr);
const scoresArr = persons.map(person => person.score * 2);
console.log(scoresArr);
let totalScore = persons.reduce((accumulator, currentPerson) => accumulator + currentPerson.score, 0);
console.log(totalScore);

