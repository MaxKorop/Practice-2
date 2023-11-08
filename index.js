import searchPeople from "./searchPeople.js";
import people from "./array.js";
import "./style.css";
import "./index.html";

const displayGreeting = () => {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const currentYear = new Date().getFullYear();

    if (name && !isNaN(parseInt(year)) && year > 0 && year <= currentYear) {
        document.getElementById("greeting").textContent = "Привіт мене звати " + name + ", мені " + (currentYear-year) + " років!";
    } else {
        document.getElementById("greeting").textContent = "Дані введено неправильно. Заповніть обидва поля";
    }
}
document.getElementById("displayGreeting").onclick = () => displayGreeting()


const searchPeopleOnPage = () =>{
    const searchField = document.getElementById("searchField").value;
    const searchValue = document.getElementById("searchValue").value;
    const searchResultElement = document.getElementById("searchResult");

    if (searchField && searchValue) {
        searchPeople(people, searchField, searchValue)
            .then((results) => {searchResultElement.innerHTML = `Результати пошуку:<br>${results.map((person) => JSON.stringify(person)).join(" ")}`;})
            .catch((error) => {searchResultElement.textContent = `Помилка: ${error}`;});
    } else {
        searchResultElement.textContent = "Заповніть обидва поля";
    }
}
document.getElementById("search").onclick = () => searchPeopleOnPage()





/*=====Task 8=====*/
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

console.log()