import searchPeople from "./searchPeople.js";
import people from "./array.js";

const year = 2023;
const greeting = (name, birthYear = 2000)=> `Я ${name}, мені ${year-birthYear} років`

greeting("Max", 2005);


/*-----Task 8-----*/
searchPeople(people, 'name', 'Person 5')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'age', 35)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'weight', 55)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));