// Object.entries()

// define a javascript object
let person = {
  name: 'John Doe',
  age: 35,
  city: 'New Your',
};

// Object.keys(person)
let entries = Object.entries(person);
console.log(entries);

// loop
for (let i = 0; i < entries.length; i++) {
  let [key, value] = entries[i];

  console.log(`${key}: ${value}`);
}
