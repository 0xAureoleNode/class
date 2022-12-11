// exercise 2
let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

// factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function ShowClasses(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new ShowClasses('a', 'b', 'c');
console.log(address1);
