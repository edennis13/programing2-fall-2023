// let age = 17;
// let name = "ryan";


// console.log(age);
// console.log(name);

// age = prompt("waht is your age?")

// name = prompt("waht is your name?")

// console.log(age);
// console.log(name);


// // alert("this is an alert!")


// const nameP = document.getElementById("name");
// nameP.innerText = name;

// const ageP = document.getElementById("age");
// ageP.innerText = age;

// nameP.style.color = "red";
// console.log(nameP);




let place = prompt("Enter a country, city, town ...!");

let placeSpan = document.getElementById("place");
placeSpan.innerText = place;

let adjective = prompt("Enter an adjective!");

let adjSpan = document.getElementById("adjective");
adjSpan.innerText = adjective;

let animal = prompt("Enter an animal type!");

let animalSpan1 = document.getElementsByClassName("animal") [0];
animalSpan1.innerText = animal;

let animalSpan2 = document.getElementsByClassName("animal") [1];
animalSpan2.innerText = animal;


let verb = prompt("Enter verb!");

let verbSpan = document.getElementById("verb");
verbSpan.innerText = verb;


let animalSpan3 = document.getElementsByClassName("animal") [2];
animalSpan3.innerText = animal;

let animalSpan4 = document.getElementsByClassName("animal") [3];
animalSpan4.innerText = animal;


let thing = prompt("Enter a thing or things");

let thingSpan = document.getElementById("thing");
thingSpan.innerText = thing;

let emotion = prompt("Enter an emotion!");

let emotionSpan = document.getElementById("emotion");
emotionSpan.innerText = emotion;