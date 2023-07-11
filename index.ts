//01: Install Node.js, TypeScript and VS Code on your computer.

//02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let person1: string = "Ateeba";

console.log(`Hello ${person1}, would you like to learn some python today?`);

//03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person2: string = "Allah ka banda";
// Print the name in lowercase
console.log(person2.toLowerCase());

// Print the name in uppercase
console.log(person2.toUpperCase());

// Function to print the name in titlecase.
const titleCaseName: string = person2
  .split(" ")
  .map((word: string) => word[0].toUpperCase() + word.substring(1).toLowerCase())
  .join(" ");

console.log(titleCaseName);

//04: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

const quote1: string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”";


console.log(quote1);

//05: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const quote: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

//06: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const nameWithWhitespace: string = "\t  Ateeba Mateen \n";
console.log(`Name with whitespace: "${nameWithWhitespace}"`);

const strippedName: string = nameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);

//07: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Addition
console.log(5 + 3); // Output: 8

// Subtraction
console.log(15 - 7); // Output: 8

// Multiplication
console.log(4 * 2); // Output: 8

// Division
console.log(16 / 2); // Output: 8

//08:

//09:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const favoriteNumber: number = 7;
const message1: string = `My favorite number is ${favoriteNumber}.`;

console.log(message1);

//10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.



//11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const f_names: string[] = ["Ayesha", "Fatima", "Sara"];

// Print each person's name
for (let i = 0; i < f_names.length; i++) {
  console.log(f_names[i]);
}

//12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names: string[] = ["Ayesha", "Fatima", "Sara"];
const message: string = "Hello, {name}! Hope you're doing well.";

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
  const personalizedMessage: string = message.replace("{name}", names[i]);
  console.log(personalizedMessage);
}

//13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const favoriteTransportation: string[] = ["car", "motorcycle", "bicycle", "train"];

// Print statements about each item in the list
favoriteTransportation.forEach((transportation: string) => {
  console.log(`I would like to own a ${transportation}.`);
});


//14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestList2: string[] = ["Ateeba Mateen", "Ayesha Maheen", "Mutahir Abdullah"];

// Print an invitation message to each person
guestList2.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});


//15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList3: string[] = ["Ateeba Mateen", "Ayesha Maheen", "Mutahir Abdullah"];

// Print the original guest list
console.log("Original Guest List:");
guestList3.forEach((person: string) => {
  console.log(person);
});

// Update the guest list with a new invitee
const replacementGuest: string = "Sara Ali";
const indexOfReplacement: number = 1; // Assuming Marie Curie is unable to attend
guestList3[indexOfReplacement] = replacementGuest;

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList3.forEach((person: string) => {
  console.log(person);
});

// Print an invitation message to each person
console.log("\nInvitation Messages:");
guestList3.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});

//16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList: string[] = ["Ateeba Mateen", "Ayesha Maheen", "Mutahir Abdullah"];

// Print the original guest list
console.log("Original Guest List:");
guestList.forEach((person: string) => {
  console.log(person);
});

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add new guests to the guest list
guestList.unshift("Maryam Ahmed"); // Add at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Mutahir Abdullah"); // Add in the middle
guestList.push("Lisa Code"); // Add at the end

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach((person: string) => {
  console.log(person);
});

// Print new invitation messages for each person
console.log("\nNew Invitation Messages:");
guestList.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});


//17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList4: string[] = ["Ateeba Mateen", "Ayesha Maheen", "Mutahir Abdullah", "Sara Ali", "Lisa Code"];

// Print the original guest list
console.log("Original Guest List:");
guestList4.forEach((person: string) => {
  console.log(person);
});

// Inform about inviting only two people
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList4.length > 2) {
  const removedGuest: string = guestList4.pop()!;
  console.log(`Sorry, ${removedGuest}, we are unable to invite you to dinner.`);
}

// Print messages to the remaining two people on the list
console.log(`\nDear ${guestList[0]}, you're still invited to dinner. Please join us for an evening of great conversation and delightful food.`);
console.log(`Dear ${guestList[1]}, you're still invited to dinner. Please join us for an evening of great conversation and delightful food.`);

// Clear the guest list
guestList = [];

// Print the empty guest list
console.log("\nUpdated Guest List:");
guestList4.forEach((person: string) => {
  console.log(person);
});

//18: Seeing the World: Think of at least five places in the world you’d like to visit.

// Define the array of locations
const locations: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

// Print the array in its original order
console.log("Original Order:");
console.log(locations);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...locations].sort());

// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(locations);

// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...locations].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(locations);

// Reverse the order of the list
locations.reverse();
console.log("\nReversed Order:");
console.log(locations);

// Reverse the order of the list again to restore the original order
locations.reverse();
console.log("\nOriginal Order (Restored):");
console.log(locations);

// Sort the array in alphabetical order
locations.sort();
console.log("\nAlphabetical Order (Sorted):");
console.log(locations);

// Sort the array in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (Sorted):");
console.log(locations);


//19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



// Print the number of guests invited to dinner
console.log(`Number of guests invited to dinner: ${guestList4.length}`);

//20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


const celestialBodies: string[] = ["Mars", "Jupiter", "Saturn", "Venus", "Earth", "Pluto"];

console.log(celestialBodies);
// document.write(celestialBodies);


//21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a class for creating country objects
class Country {
  // Properties
  name: string;
  capital: string;
  population: number;

  // Constructor
  constructor(name: string, capital: string, population: number) {
    this.name = name;
    this.capital = capital;
    this.population = population;
  }

  // Method
  displayInfo() {
    console.log(`Country: ${this.name}`);
    console.log(`Capital: ${this.capital}`);
    console.log(`Population: ${this.population}`);
  }
}

// Create instances of country objects
const country1 = new Country("China", "Beijing", 1444216107);
const country2 = new Country("Germany", "Berlin", 83149300);
const country3 = new Country("Pakistan", "Islamabad", 225199937);

// Output the country objects
country1.displayInfo();
country2.displayInfo();
country3.displayInfo();


//22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//I already had so many errors.

//23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let river: string = 'indus';

console.log("Is river == 'indus'? I predict true.");
console.log(river == 'indus');

console.log("Is river == 'satluj'? I predict false.");
console.log(river == 'satluj');

console.log("Is river != 'ford'? I predict true.");
console.log(river != 'ford');

console.log("Is river != 'indus'? I predict false.");
console.log(river != 'indus');

console.log("Is river === 'indus'? I predict true.");
console.log(river === 'indus');

console.log("Is river === 'Indus'? I predict false.");
console.log(river === 'Indus');

console.log("Is river !== 'satluj'? I predict true.");
console.log(river !== 'satluj');

console.log("Is river !== 'indus'? I predict false.");
console.log(river !== 'indus');

console.log("Is river.toLowerCase() === 'indus'? I predict true.");
console.log(river.toLowerCase() === 'indus');

console.log("Is river.length > 5? I predict false.");
console.log(river.length > 5);


//24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


let alienColor: string = 'red';

if (alienColor === 'green') {
  console.log("Congratulations! You just earned 5 points!");
}

//Second Version:

// let alienColor: string = 'red';

// if (alienColor === 'green') {
//   console.log("Congratulations! You just earned 5 points!");
// }


//26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alienColor26: string = 'green';

if (alienColor26 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien!");
}


//27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//This version is for the yellow alien.
let alienColor27: string = 'yellow';

if (alienColor27 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the green alien!");
} else if (alienColor27 === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
} else if (alienColor27 === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}

//28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:


let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favorite_fruits: string[] = ["apple", "strawberry", "leechi"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

//30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames: string[] = ['admin', 'Sara', 'Maaz', 'Mary', 'Elon'];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}


//31: 

// Remove all usernames from the array in exercise28.
// userList = [];

// if (userList.length === 0) {
//   console.log("We need to find some users!");
// }

//32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users: string[] = ['Ahmed', 'Ali', 'Hassan', 'Sana', 'Fatima'];
let new_users: string[] = ['Ali', 'Asma', 'Ahmed', 'Raza', 'Zara'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`Username "${new_users[i]}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Username "${new_users[i]}" is available.`);
  }
}


//33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = 'st';
  } else if (number === 2) {
    ordinalEnding = 'nd';
  } else if (number === 3) {
    ordinalEnding = 'rd';
  } else {
    ordinalEnding = 'th';
  }

  console.log(`${number}${ordinalEnding}`);
}


//34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

for (let i = 0; i < favoritePizzas.length; i++) {
  let pizza = favoritePizzas[i];
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");


//35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ['Sparrow', 'Duck', 'Hen'];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log(`A ${animal} would make a great pet.`);
}

console.log("They all have wings and a cute beak. Any of these animals would make a great pet!");


//36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string) {
  console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
}

// Calling the function
make_shirt('Medium', 'Spiders are the only web developers who get happy when they get a bug');


//37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// [THIS IS MODIFIED FUNCTION FROM PREVIOUS EXERCISE]
// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
//   console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
// }

// // Calling the function with default values
// make_shirt(); // Large shirt with default message

// // Calling the function with different size and default message
// make_shirt('Medium'); // Medium shirt with default message

// // Calling the function with different size and message
// make_shirt('Small', 'Hello World'); // Small shirt with custom message

//38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = 'Pakistan') {
  console.log(`${city} is in ${country}.`);
}

// Calling the function with different cities and countries
describe_city('Karachi'); // Karachi is in Pakistan
describe_city('London', 'United Kingdom'); // London is in United Kingdom
describe_city('Dubai', 'United Arab Emirates'); // Dubai is in United Arab Emirates


//39: City Names: Write a function called city_country() that takes in the name of a city and its country. 

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
console.log(city_country('Lahore', 'Pakistan')); // Lahore, Pakistan
console.log(city_country('Tokyo', 'Japan')); // Tokyo, Japan
console.log(city_country('Paris', 'France')); // Paris, France


//40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Album {
  artist: string;
  title: string;
  tracks?: number;
} //interfaces in ts describe the shape[properties] of objects.

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = makeAlbum("Artist 1", "Album 1");
const album2 = makeAlbum("Artist 2", "Album 2", 12);
const album3 = makeAlbum("Artist 3", "Album 3", 8);

console.log(album1);
console.log(album2);
console.log(album3);


//41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician: string) => {
    console.log(magician);
  });
}

// Create an array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the show_magicians() function and pass the array
show_magicians(magicians);


//42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



function makeGreat(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

makeGreat(magicians);
show_magicians(magicians);

//43: 


function makeGreatAgain(magicians: string[]): string[] {
  const copiedMagicians: string[] = [...magicians]; // Create a copy of the original array

  for (let i = 0; i < copiedMagicians.length; i++) {
    copiedMagicians[i] = "the Great " + copiedMagicians[i]; // Modify the copied array
  }

  return copiedMagicians; // Return the modified array
}

const modifiedMagicians: string[] = makeGreatAgain([...magicians]); // Pass a copy of the original array to makeGreat()

show_magicians(magicians); // Show the original names
show_magicians(modifiedMagicians); // Show the modified names






//44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
  // "..." is the  rest parameter here that can accept many numbers of inputs.
  console.log("Sandwich Order Summary:");
  console.log("Items: " + items.join(", "));
  console.log("Total items: " + items.length);
  console.log("---------------------------");
}

orderSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Bread", "Turkey", "Mayonnaise");
orderSandwich("Bread", "Peanut Butter", "Jelly");


//45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...args: Array<{ key: string, value: any }>): Car {
  const car: Car = {
    manufacturer,
    modelName,
  };

  for (const arg of args) {
    car[arg.key] = arg.value;
  }

  return car;
}

// Example usage
const car = createCar('Toyota', 'Camry', { key: 'color', value: 'blue' }, { key: 'optionalFeature', value: 'sunroof' });

console.log(car);

