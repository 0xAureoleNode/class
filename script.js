// exercise 1
let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

const showAddress = (address) => {
  for (let key in address) console.log(key, address[key]);
};

showAddress(address);
