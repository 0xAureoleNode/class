// Object.keys()

// define a javascript object
let person = {
  name: 'John Doe',
  age: 35,
  city: 'New Your',
};

// Object.keys(person)
let keys = Object.keys(person);
console.log(keys);

// loop
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = person[key];
  console.log(`${key}: ${value}`);
}
