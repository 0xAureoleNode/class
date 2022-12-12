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
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    });
  },
};

video.showTags();
