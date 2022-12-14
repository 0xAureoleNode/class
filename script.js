// this
// method => obj
// function => global (window, global)
// constructor function => new empty object

// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   },
// };

// const test = function () {
//   console.log(this);
// };

// video.play();
// test();

// special function
/*
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTags();
*/
// function playVideo() {
//   console.log(this);
// }

// playVideo.call({ name: 'Mosh' });
// playVideo.apply({ name: 'Mosh' });

function greet(greeting) {
  return greeting + ' ' + this.name;
}

var person1 = {
  name: 'Alice',
};
var person2 = {
  name: 'Bob',
};

console.log(greet.call(person1, 'Hello')); // returns 'Hello Alice'
greet.call(person2, 'Hello'); // returns 'Hello Bob'
